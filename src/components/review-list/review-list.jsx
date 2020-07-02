import React, {PureComponent} from 'react';
import Review from "../review/review.jsx";

class ReviewList extends PureComponent {
  render() {
    return (
      <ul className="reviews__list">
        <Review />
      </ul>
    );
  }
}

export default ReviewList;
