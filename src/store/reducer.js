import {locations} from "../mocks/places";
import {extend} from "../utils/func";
import {ActionType as LocationActionType} from "./actions/location";
import {ActionType as PlacesActionType} from "./actions/places";
import {ActionType as ReviewsActionType} from "./actions/reviews";

const initialState = {
  locations,
  currentLocation: `Amsterdam`,
  places: [],
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LocationActionType.CHANGE_CITY:
      return extend(state, {currentLocation: action.payload});
    case PlacesActionType.SET_PLACES:
      return extend(state, {places: action.payload});
    case ReviewsActionType.SET_REVIEWS:
      return extend(state, {reviews: action.payload});
  }

  return state;
};

export {reducer, initialState};
