import {reducer, initialState} from "./reviews";
import {ActionType} from "../../actions/reviews";

describe(`Checks reducer reviews`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should cause the reviews to be saved`, () => {
    const reviews = [{
      id: 1,
      username: `Jon`,
      rating: `70%`,
      message: `message`,
      date: `date`,
    }];

    const callReducer = reducer(initialState, {
      type: ActionType.SET_REVIEWS,
      payload: reviews,
    });

    const result = Object.assign({}, initialState, {reviews});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should check the locked form`, () => {
    const isLockedForm = true;

    const callReducer = reducer(initialState, {
      type: ActionType.IS_LOCKED_FORM,
      payload: isLockedForm,
    });

    const result = Object.assign({}, initialState, {isLockedForm});

    expect(callReducer).toEqual(result);
  });
});
