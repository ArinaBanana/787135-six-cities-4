import {extend} from "../../../utils/func";
import {ActionType} from "../../actions/reviews";

const initialState = {
  reviews: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS:
      return extend(state, {reviews: action.payload});
  }

  return state;
};

export {reducer, initialState};
