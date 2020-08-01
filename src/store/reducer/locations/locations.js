import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/location";

const initialState = {
  locations: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
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
