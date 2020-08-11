import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/places";

const initialState = {
  places: [],
  nearPlaces: [],
  favoritePlaces: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PLACES:
      return extend(state, {places: action.payload});
    case ActionType.SET_NEAR_PLACES:
      return extend(state, {nearPlaces: action.payload});
    case ActionType.SET_FAVORITE_PLACES:
      return extend(state, {favoritePlaces: action.payload});
    case ActionType.UPDATE_PLACE:
      const result = state.places.map((place) => {
        if (place.id === action.payload.id) {
          return action.payload;
        }
        return place;
      });

      const favorites = result.filter((place) => place.isBookmark === true);

      return extend(state, {places: result}, {favoritePlaces: favorites});
  }

  return state;
};

export {reducer, initialState};
