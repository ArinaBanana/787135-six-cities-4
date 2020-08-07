import {reducer, initialState} from "./locations";
import {ActionType} from "../../actions/location";

describe(`Checks reducer locations`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change the current location by a given value`, () => {
    const callReducer = reducer(initialState, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });

    const result = Object.assign({}, initialState, {currentLocation: `Paris`});

    expect(callReducer).toEqual(result);
  });
});
