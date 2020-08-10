import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import {isAuthorized} from "../../store/selectors/user";

function ReviewsContainer(props) {
  const {reviews, isAuth, placeId} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews}/>
      {isAuth && <ReviewForm placeId={placeId}/>}
    </section>
  );
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  placeId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.REVIEWS.reviews,
  isAuth: isAuthorized(state),
});

export default connect(mapStateToProps)(ReviewsContainer);
