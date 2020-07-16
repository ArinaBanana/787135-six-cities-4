import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import MainScreen from "../main-screen/main-screen.jsx";
import DetailedInfoScreen from "../detailed-info-screen/detailed-info-screen.jsx";

class Screens extends PureComponent {
  constructor(props) {
    super(props);

    this._currentPlace = this.props.places[0];

    this._handlePlaceClick = this._handlePlaceClick.bind(this);
    this._getNearPlaces = this._getNearPlaces.bind(this);
  }

  _handlePlaceClick(place) {
    const {history} = this.props;

    this._currentPlace = place;
    history.push(`/dev-detailed`);
  }

  _getNearPlaces() {
    const {places} = this.props;

    const nearPlaces = places.map((place) => {
      const isActiveMarker = place.id === this._currentPlace.id;
      const iconUrl = isActiveMarker ? `img/pin-active.svg` : `img/pin.svg`;

      return Object.assign({}, ...[place], {iconUrl});
    });

    this._currentPlaceWithColorPin = nearPlaces.find((item) => item.iconUrl === `img/pin-active.svg`);

    // В этом месте фильтровать так же по условию "находятся рядом"
    return nearPlaces.filter((item) => item !== this._currentPlaceWithColorPin).slice(0, 3);
  }

  render() {
    const {countPlaces, places, reviews} = this.props;
    const nearPlaces = this._getNearPlaces();

    return (
      <Switch>
        <Route exact path="/">
          <MainScreen
            countPlaces={countPlaces}
            places={places}
            onTitleClick={this._handlePlaceClick}
          />
        </Route>
        <Route exact path="/dev-detailed">
          <DetailedInfoScreen place={this._currentPlaceWithColorPin} reviews={reviews} nearPlaces={nearPlaces} />;
        </Route>
      </Switch>
    );
  }
}

const getLocationSelector = (state) => state.location;
const getOffersSelector = (state) => state.offers;

const getPlacesByCurrentLocation = createSelector(
    getLocationSelector,
    getOffersSelector,
    (location, offers) => {
      return offers.filter((offer) => {
        return offer.city.name === location;
      });
    }
);

const mapStateToProps = (state) => ({
  places: getPlacesByCurrentLocation(state),
  countPlaces: state.offers.length,
  reviews: state.reviews
});

Screens.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  history: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export {Screens};
export default connect(mapStateToProps)(Screens);
