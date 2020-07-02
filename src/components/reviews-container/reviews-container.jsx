import React, {PureComponent} from 'react';
import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

class ReviewsContainer extends PureComponent {
  render() {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ReviewList />
        <ReviewForm />
      </section>
    );
  }
}

export default ReviewsContainer;
