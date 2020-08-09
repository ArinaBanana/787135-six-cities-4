import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import LocationList from "../location-list/location-list.jsx";
import PlacesContainer from "../places-container/places-container.jsx";
import NoPlacesInCity from "../no-places-in-city/no-places-in-city.jsx";
import User from "../user/user.jsx";

import getPlacesWithIconForMap from "../../utils/places";

import {getPlacesByCurrentLocation} from "../../store/selectors/places";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._getMarkers = this._getMarkers.bind(this);
    this._getZoomAndCity = this._getZoomAndCity.bind(this);
    this._renderScreen = this._renderScreen.bind(this);
  }

  _isEmpty() {
    const {places} = this.props;
    return places.length === 0;
  }

  _getMarkers() {
    const {places, activeElement} = this.props;
    return getPlacesWithIconForMap(places, activeElement);
  }

  _getZoomAndCity() {
    const {places} = this.props;

    let zoom;
    let city;

    if (places.length) {
      zoom = places[0].city.zoom;
      city = places[0].city.coordinates;
    }

    return {zoom, city};
  }

  _renderScreen() {
    const {places, currentLocation, setActiveElement} = this.props;
    const {zoom, city} = this._getZoomAndCity();
    const markers = this._getMarkers();

    return this._isEmpty() ? <NoPlacesInCity location={currentLocation} /> : <PlacesContainer
      places={places}
      markers={markers}
      currentLocation={currentLocation}
      setActiveElement={setActiveElement}
      zoom={zoom}
      city={city}/>;
  }

  render() {
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <User isAuth={this.props.isAuth} />
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList/>
            </section>
          </div>
          <div className="cities">
            {this._renderScreen()}
          </div>
        </main>
      </div>
    );
  }
}

MainScreen.propTypes = {
  places: PropTypes.array.isRequired,
  currentLocation: PropTypes.string.isRequired,
  setActiveElement: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  currentLocation: state.LOCATIONS.currentLocation,
  places: getPlacesByCurrentLocation(state),
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
