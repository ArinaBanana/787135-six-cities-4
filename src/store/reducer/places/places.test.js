import {reducer, initialState} from "./places";
import {ActionType} from "../../actions/places";

describe(`Checks reducer places`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
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
      isBookmark: false,
      coordinates: [52.3809553943508, 4.939309666406198],
      city: {
        name: `City`,
        coordinates: [52.38333, 4.9],
        zoom: 12
      }
    }];

    const callReducer = reducer(initialState, {
      type: ActionType.SET_PLACES,
      payload: places,
    });

    const result = Object.assign({}, initialState, {places});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should cause the near places to be saved`, () => {
    const places = [{
      id: 9,
      title: `Foo`,
      price: 80,
      img: `path`,
      type: `room`,
      rating: `80%`,
      isPremium: true,
      isBookmark: false,
      coordinates: [52.3809553943508, 4.939309666406198],
      city: {
        name: `City`,
        coordinates: [52.38333, 4.9],
        zoom: 12
      }
    }];

    const callReducer = reducer(initialState, {
      type: ActionType.SET_NEAR_PLACES,
      payload: places,
    });

    const result = Object.assign({}, initialState, {nearPlaces: places});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should cause the favorite places to be saved`, () => {
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
      type: ActionType.SET_FAVORITE_PLACES,
      payload: places,
    });

    const result = Object.assign({}, initialState, {favoritePlaces: places});

    expect(callReducer).toEqual(result);
  });

  it(`Reducer should update place`, () => {
    const state = {
      places: [
        {
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
        },
        {
          id: 10,
          title: `Foo`,
          price: 80,
          img: `path`,
          type: `room`,
          rating: `80%`,
          isPremium: true,
          isBookmark: false,
          coordinates: [52.3809553943508, 4.939309666406198],
          city: {
            name: `City`,
            coordinates: [52.38333, 4.9],
            zoom: 12
          }
        }
      ],
      nearPlaces: [{
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
      }],
      favoritePlaces: [],
    };

    const place = {
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
    };

    const places = state.places;
    const nearby = state.nearPlaces;
    const favorites = [
      {
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
      }
    ];

    const callReducer = reducer(state, {
      type: ActionType.UPDATE_PLACE,
      payload: place,
    });

    const result = Object.assign({}, state, {places}, {favoritePlaces: favorites}, {nearPlaces: nearby});

    expect(callReducer).toEqual(result);
  });
});
