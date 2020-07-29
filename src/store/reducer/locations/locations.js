import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/location";
import {locations} from "../../../mocks/places";

const initialState = {
  locations,
  currentLocation: `Amsterdam`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {currentLocation: action.payload});
  }

  return state;
};

export {reducer};
