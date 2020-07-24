import {reviews} from "../../mocks/reviews";

const ActionType = {
  SET_REVIEWS: `SET_REVIEWS`,
};

const ActionCreator = {
  setReviews() {
    return {type: ActionType.SET_REVIEWS, payload: reviews};
  }
};

export {ActionCreator, ActionType};
