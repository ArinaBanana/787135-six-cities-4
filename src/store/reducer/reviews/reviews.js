import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/reviews";

const initialState = {
  reviews: [],
  isLockedForm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS:
      return extend(state, {reviews: action.payload});
    case ActionType.IS_LOCKED_FORM:
      return extend(state, {isLockedForm: action.payload});
  }

  return state;
};

export {reducer, initialState};
