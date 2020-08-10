import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../store/actions/reviews";
import {MAX_TEXT_LENGTH, MIN_TEXT_LENGTH} from "../../utils/review";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit, placeId} = this.props;

    evt.preventDefault();

    onSubmit(placeId, {
      comment: this.formRef.current.review.value,
      rating: this.formRef.current.rating.value
    });

    this.formRef.current.reset();
  }

  _handleChange() {
    const {onChange} = this.props;
    const lengthText = this.formRef.current.review.value.length;

    if (lengthText >= MIN_TEXT_LENGTH) {
      onChange(false);
    } else {
      onChange(true);
    }
  }

  render() {
    const {isDisabledButton} = this.props;

    return (
      <form
        ref={this.formRef}
        onSubmit={this._handleSubmit}
        className="reviews__form form"
        action="#"
        method="post"
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input required={true} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input required={true} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input required={true} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input required={true} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input required={true} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>

        <textarea
          onChange={this._handleChange}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={MIN_TEXT_LENGTH}
          maxLength={MAX_TEXT_LENGTH}
        />

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledButton}>Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeId: PropTypes.number.isRequired,
  isDisabledButton: PropTypes.bool.isRequired
};

const mapDispatchToProps = {
  onSubmit: Operation.postReview,
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
