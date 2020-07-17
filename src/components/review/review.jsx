import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Review extends PureComponent {
  render() {
    const {review} = this.props;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {review.username}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.rating}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.message}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired
};

export default Review;
