import parseIso from "date-fns/parseISO";

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
};

const ActionCreator = {
  setReviews(reviews) {
    return {type: ActionType.SET_REVIEWS, payload: reviews};
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

        dispatch(ActionCreator.setReviews(reviews));
      });
  }
};

export {ActionCreator, ActionType, Operation};
