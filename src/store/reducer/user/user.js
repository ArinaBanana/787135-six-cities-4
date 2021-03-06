import {ActionType} from "../../actions/user";
import {extend} from "../../../utils/func";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
  isChecking: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.SET_USER:
      return extend(state, {user: action.payload});
    case ActionType.IS_CHECKING:
      return extend(state, {isChecking: action.payload});
  }

  return state;
};

export {reducer, AuthorizationStatus, initialState};
