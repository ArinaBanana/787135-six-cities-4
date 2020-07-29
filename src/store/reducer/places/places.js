import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/places";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PLACES:
      return extend(state, {places: action.payload});
  }

  return state;
};

export {reducer};
