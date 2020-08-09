import {reducer, initialState} from "./user";
import {ActionType} from "../../actions/user";

describe(`Checks reducer user`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should cause the auth status to be saved`, () => {
    const authorizationStatus = `status`;

    const callReducer = reducer(initialState, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: authorizationStatus
    });

    const result = Object.assign({}, initialState, {authorizationStatus});

    expect(callReducer).toEqual(result);
  });
});
