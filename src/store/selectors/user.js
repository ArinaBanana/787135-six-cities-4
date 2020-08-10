export const getAuthorizationStatus = (state) => {
  return state.USER.authorizationStatus;
};

export const isAuthorized = (state) => {
  return state.USER.authorizationStatus === `AUTH`;
};

export const getUser = (state) => {
  return state.USER.user;
};
