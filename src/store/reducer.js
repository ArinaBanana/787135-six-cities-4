import {generatePlaces, locations} from "../mocks/places";
import {reviews} from "../mocks/reviews";
import {extend} from "../utils/func";
import {ActionType} from "./actions/location";

const places = generatePlaces();

const initialState = {
  currentLocation: `Amsterdam`,
  places,
  reviews,
  locations
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(initialState, {currentLocation: action.payload});
  }

  return state;
};

export {reducer};
