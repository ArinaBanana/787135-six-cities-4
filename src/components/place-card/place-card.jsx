import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";

import {getUrlByPlace} from "../../utils/url";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove() {
    const {onMouseMove, place} = this.props;

    return onMouseMove(place.id);
  }

  render() {
    const {place} = this.props;

    return (
      <article className="cities__place-card place-card" onMouseMove={this.handleMouseMove}>

        {
          place.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``
        }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={place.img} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{place.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={cn(`place-card__bookmark-button button`, {"place-card__bookmark-button--active": place.isBookmark})} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: place.rating}} />
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
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
  })
};

export default PlaceCard;
