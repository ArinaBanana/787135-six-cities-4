import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

function ReviewList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        return <Review key={review.id} review={review}/>;
      })}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReviewList;
