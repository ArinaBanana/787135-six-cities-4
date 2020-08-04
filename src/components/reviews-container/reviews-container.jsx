import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

function ReviewsContainer(props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews}/>
      <ReviewForm/>
    </section>
  );
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.REVIEWS.reviews
});

export default connect(mapStateToProps)(ReviewsContainer);
