import {AuthorizationStatus} from "../reducer/user/user";

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
    return api.get(`/login`)
      .then((response) => {
        const user = adaptUser(response.data);

        dispatch(ActionCreator.setUser(user));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

export {ActionType, ActionCreator, Operation};
