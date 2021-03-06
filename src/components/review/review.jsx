import React from "react";
import PropTypes from "prop-types";
import {getFloatNumberInPercent, parseDate} from "../../utils/func";

function Review(props) {
  const {review} = props;
  const rating = getFloatNumberInPercent(review.rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.userAvatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.username}
        </span>
        {
          review.isPro ? <span className="property__user-status">Pro</span> : ``
        }
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.message}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{parseDate(review.date)}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired
  }).isRequired
};

export default Review;
