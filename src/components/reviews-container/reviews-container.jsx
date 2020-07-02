import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

class ReviewsContainer extends PureComponent {
  render() {
    const {reviews} = this.props;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ReviewList reviews={reviews} />
        <ReviewForm />
      </section>
    );
  }
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsContainer;
