import parseIso from "date-fns/parseISO";
import {StatusCodes} from "../../utils/status";

const adaptReviews = (reviews) => {
  return reviews
    .map((review) => {
      return {
        id: review.id,
        username: review.user.name,
        rating: review.rating,
        message: review.comment,
        date: review.date,
        userAvatar: review.user[`avatar_url`],
        isPro: review.user[`is_pro`],
        userId: review.user.id
      };
    })
    .sort((a, b) => parseIso(b.date) - parseIso(a.date));
};

const ActionType = {
  SET_REVIEWS: `SET_REVIEWS`,
  IS_LOCKED_FORM: `IS_LOCKED_FORM`
};

const ActionCreator = {
  setReviews(reviews) {
    return {type: ActionType.SET_REVIEWS, payload: reviews};
  },

  isLockedForm(isLock) {
    return {type: ActionType.IS_LOCKED_FORM, payload: isLock};
  }
};

const Operation = {
  loadReviews: (placeId) => (dispatch, getState, api) => {
    return api.get(`/comments/${placeId}`).then((response) => {
      const reviews = adaptReviews(response.data);

      dispatch(ActionCreator.setReviews(reviews));
    });
  },

  postReview: (placeId, data) => (dispatch, getState, api) => {
    return api.post(`/comments/${placeId}`, {
      comment: data.comment,
      rating: data.rating
    })
      .then((response) => {
        const reviews = adaptReviews(response.data);

        dispatch(ActionCreator.isLockedForm(true));

        if (response.status === StatusCodes.OK) {
          dispatch(ActionCreator.setReviews(reviews));
          dispatch(ActionCreator.isLockedForm(false));
        }
      });
  }
};

export {ActionCreator, ActionType, Operation};
