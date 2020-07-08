import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

class ReviewList extends PureComponent {
  render() {
    const {reviews} = this.props;

    return (
      <ul className="reviews__list">
        {reviews.map((review) => {
          return <Review key={review.id} review={review}/>;
        })}
      </ul>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReviewList;
