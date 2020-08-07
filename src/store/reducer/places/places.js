import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/places";

const initialState = {
  places: [],
  nearPlaces: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PLACES:
      return extend(state, {places: action.payload});
    case ActionType.SET_NEAR_PLACES:
      return extend(state, {nearPlaces: action.payload});
  }

  return state;
};

export {reducer, initialState};
