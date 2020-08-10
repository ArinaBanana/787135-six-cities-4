import {AuthorizationStatus} from "../reducer/user/user";
import {getUser} from "../selectors/user";
import {replace} from 'connected-react-router';

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
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    const state = getState();
    const user = getUser(state);

    if (user) {
      return null;
    }

    return api.get(`/login`)
      .then((response) => {
        const newUser = adaptUser(response.data);

        dispatch(ActionCreator.setUser(newUser));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(replace(`/login`));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        const newUser = adaptUser(response.data);

        dispatch(ActionCreator.setUser(newUser));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(replace(`/`));
      });
  },
};

export {ActionType, ActionCreator, Operation};
