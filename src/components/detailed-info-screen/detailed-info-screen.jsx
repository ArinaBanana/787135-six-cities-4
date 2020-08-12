import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import ReviewsContainer from "../reviews-container/reviews-container.jsx";
import Map from "../map/map.jsx";
import PlacesList from "../places-list/places-list.jsx";
import User from "../user/user.jsx";
import PlaceGallery from "../place-gallery/place-gallery.jsx";
import PlaceInsideList from "../place-inside-list/place-inside-list.jsx";

import {getFloatNumberInPercent, splitString} from "../../utils/func";
import getPlacesWithIconForMap from "../../utils/places";

import {getActivePlace} from "../../store/selectors/places";
import {Operation as ReviewsOperation} from "../../store/actions/reviews";
import {Operation as PlacesOperation} from "../../store/actions/places";

class DetailedInfoScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._getPlaces = this._getPlaces.bind(this);
  }

  componentDidMount() {
    const {getReviews, getNearPlaces, placeId} = this.props;
    getReviews(placeId);
    getNearPlaces(placeId);
  }

  componentDidUpdate(prevProps) {
    const {getReviews, getNearPlaces, placeId} = this.props;

    if (prevProps.placeId !== placeId) {
      getReviews(placeId);
      getNearPlaces(placeId);
    }
  }

  _getPlaces() {
    const {place, nearPlaces, placeId} = this.props;
    const places = nearPlaces.slice();
    places.push(place);

    return getPlacesWithIconForMap(places, placeId);
  }

  render() {
    const {place, nearPlaces, setActiveElement} = this.props;

    if (!place) {
      return null;
    }

    const placesForMap = this._getPlaces();
    const rating = getFloatNumberInPercent(place.rating);
    const {firstParagraph, secondParagraph} = splitString(place.description);

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={`/`} className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <User />
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PlaceGallery images={place.allImages} />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {
                  place.isPremium ? <div className="property__mark"><span>Premium</span></div> : ``
                }

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {place.title}
                  </h1>
                  <button className={cn(`property__bookmark-button button`, {"place-card__bookmark-button--active": place.isBookmark})} type="button">
                    <svg className={cn(`property__bookmark-icon`, {"place-card__bookmark-icon": place.isBookmark})} width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{place.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {place.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {place.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {place.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{place.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <PlaceInsideList items={place.goods} />
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`/${place.host.avatar}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {place.host.name}
                    </span>
                    {
                      place.host.isPro ? <span className="property__user-status">Pro</span> : ``
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {firstParagraph}
                    </p>
                    <p className="property__text">
                      {secondParagraph}
                    </p>
                  </div>
                </div>
                <ReviewsContainer placeId={this.props.placeId} />
              </div>
            </div>
            <section className="property__map map" >
              <Map markers={placesForMap} height={`579px`} city={place.city.coordinates} zoom={place.city.zoom} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList places={nearPlaces} isNearList={true} setActiveElement={setActiveElement} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

DetailedInfoScreen.propTypes = {
  placeId: PropTypes.number.isRequired,
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    city: PropTypes.object.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    allImages: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired
  }),
  nearPlaces: PropTypes.array.isRequired,
  setActiveElement: PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
  getNearPlaces: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const activePlace = getActivePlace(state, ownProps);

  return {
    place: activePlace,
    nearPlaces: state.PLACES.nearPlaces
  };
};

const mapDispatchToProps = {
  getReviews: ReviewsOperation.loadReviews,
  getNearPlaces: PlacesOperation.loadNearPlaces
};

export {DetailedInfoScreen};
export default connect(mapStateToProps, mapDispatchToProps)(DetailedInfoScreen);
