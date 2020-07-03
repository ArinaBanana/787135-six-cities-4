import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import DetailedInfoScreen from "../detailed-info-screen/detailed-info-screen.jsx";

class Screens extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPlace: this.props.places[0]
    };

    this._handlePlaceClick = this._handlePlaceClick.bind(this);
    this._getNearPlaces = this._getNearPlaces.bind(this);
  }

  _handlePlaceClick(place) {
    const {history} = this.props;

    this.setState({
      currentPlace: place
    }, () => {
      history.push(`/dev-detailed`);
    });
  }

  _getNearPlaces() {
    const {places} = this.props;
    const {currentPlace} = this.state;

    return places.map((place) => {
      const isActiveMarker = place.id === currentPlace.id;
      const color = isActiveMarker ? `img/pin-active.svg` : `img/pin.svg`;

      return {
        id: place.id,
        coordinates: place.coordinates,
        color
      };
    });
  }

  render() {
    const {countPlaces, places, reviews} = this.props;
    const {currentPlace} = this.state;

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
          <DetailedInfoScreen place={currentPlace} reviews={reviews} nearPlaces={nearPlaces} />;
        </Route>
      </Switch>
    );
  }
}

Screens.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  history: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default Screens;
