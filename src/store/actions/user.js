import {AuthorizationStatus} from "../reducer/user/user";
import {getUser} from "../selectors/user";
import {replace} from "connected-react-router";

const adaptUser = (user) => {
  return {
    id: user.id,
    avatar: user[`avatar_url`],
    email: user.email,
    name: user.name,
    isPro: user[`is_pro`]
  };
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
  IS_CHECKING: `IS_CHECKING`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setUser: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user,
    };
  },

  isChecking: (isCheck) => {
    return {
      type: ActionType.IS_CHECKING,
      payload: isCheck,
    };
  }
};

const Operation = {
  checkAuth: (required) => (dispatch, getState, api) => {
    const state = getState();
    const user = getUser(state);

    if (user) {
      return null;
    }

    return api.get(`/login`)
      .then((response) => {
        const newUser = adaptUser(response.data);

        dispatch(ActionCreator.isChecking(true));

        dispatch(ActionCreator.setUser(newUser));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));

        dispatch(ActionCreator.isChecking(false));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        if (required) {
          dispatch(replace(`/login`));
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        const newUser = adaptUser(response.data);

        dispatch(ActionCreator.isChecking(true));

        dispatch(ActionCreator.setUser(newUser));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(replace(`/`));

        dispatch(ActionCreator.isChecking(false));
      });
  },
};

export {ActionType, ActionCreator, Operation};
