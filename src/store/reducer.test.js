import {reducer, initialState} from "./reducer";
import {ActionType as LocationActionType} from "./actions/location";
import {ActionType as PlacesActionType} from "./actions/places";
import {ActionType as ReviewsActionType} from "./actions/reviews";

describe(`Check reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change the current location by a given value`, () => {
    const callReducer = reducer(initialState, {
      type: LocationActionType.CHANGE_CITY,
      payload: `Paris`,
    });

    const result = Object.assign({}, initialState, {currentLocation: `Paris`});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should cause the places to be saved`, () => {
    const places = [{
      id: 9,
      title: `Foo`,
      price: 80,
      img: `path`,
      type: `room`,
      rating: `80%`,
      isPremium: true,
      isBookmark: true,
      coordinates: [52.3809553943508, 4.939309666406198],
      city: {
        name: `City`,
        coordinates: [52.38333, 4.9],
        zoom: 12
      }
    }];

    const callReducer = reducer(initialState, {
      type: PlacesActionType.SET_PLACES,
      payload: places,
    });

    const result = Object.assign({}, initialState, {places});

    expect(callReducer).toEqual(result);
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
      type: ReviewsActionType.SET_REVIEWS,
      payload: reviews,
    });

    const result = Object.assign({}, initialState, {reviews});

    expect(callReducer).toEqual(result);
  });
});
