import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Operation} from "../../store/actions/places";

import {getUrlByPlace} from "../../utils/url";
import {getFloatNumberInPercent} from "../../utils/func";
import {StatusUpdate} from "../../utils/status";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClickButtonBookmark = this.handleClickButtonBookmark.bind(this);
  }

  handleMouseMove() {
    const {onMouseMove, place} = this.props;

    return onMouseMove(place.id);
  }

  handleClickButtonBookmark() {
    const {place, setFavoritePlace} = this.props;

    if (place.isBookmark) {
      setFavoritePlace(place.id, StatusUpdate.DELETE);
    } else {
      setFavoritePlace(place.id, StatusUpdate.ADD);
    }
  }

  render() {
    const {place, isFavoritePlace} = this.props;

    const rating = getFloatNumberInPercent(place.rating);

    return (
      <article className={cn(`cities__place-card place-card`, {"favorites__card": isFavoritePlace})} onMouseMove={this.handleMouseMove}>

        {
          place.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``
        }

        <div className={cn(`place-card__image-wrapper`, {"favorites__image-wrapper": isFavoritePlace}, {"cities__image-wrapper": !isFavoritePlace})}>
          <a href="#">
            <img className="place-card__image" src={place.img} width="260" height="200" alt="Place image"/>
          </a>
        </div>

        <div className={cn(`place-card__info`, {"favorites__card-info": isFavoritePlace})}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{place.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            <button
              onClick={this.handleClickButtonBookmark}
              className={cn(`place-card__bookmark-button button`, {"place-card__bookmark-button--active": place.isBookmark})}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={getUrlByPlace(place)}>{place.title}</Link>
          </h2>
          <p className="place-card__type">{place.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onMouseMove: PropTypes.func.isRequired,
  setFavoritePlace: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
  }),
  isFavoritePlace: PropTypes.bool.isRequired
};

const mapDispatchToProps = {
  setFavoritePlace: Operation.postFavoritePlace
};

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
