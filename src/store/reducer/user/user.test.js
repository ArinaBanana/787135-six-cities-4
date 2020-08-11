import {reducer, initialState} from "./user";
import {ActionType} from "../../actions/user";

describe(`Checks reducer user`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should cause the auth status to be saved`, () => {
    const authorizationStatus = `AUTH`;

    const callReducer = reducer(initialState, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: authorizationStatus
    });

    const result = Object.assign({}, initialState, {authorizationStatus});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should cause the user to be saved`, () => {
    const user = {
      id: 0,
      avatar: `path`,
      email: `email`,
      name: `Carry`,
      isPro: false
    };

    const callReducer = reducer(initialState, {
      type: ActionType.SET_USER,
      payload: user
    });

    const result = Object.assign({}, initialState, {user});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should follow the check status`, () => {
    const isChecking = true;

    const callReducer = reducer(initialState, {
      type: ActionType.IS_CHECKING,
      payload: isChecking
    });

    const result = Object.assign({}, initialState, {isChecking});

    expect(callReducer).toEqual(result);
  });
});
