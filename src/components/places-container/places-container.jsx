import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";

function PlacesContainer(props) {
  const {places, markers, currentLocation, setActiveElement, zoom, city} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} places to stay in {currentLocation}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
              Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>

        <PlacesList
          places={places}
          isNearList={false}
          isFavoritePlace={false}
          setActiveElement={setActiveElement}/>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map markers={markers} height={`635px`} zoom={zoom} city={city}/>
        </section>
      </div>
    </div>
  );
}

PlacesContainer.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  markers: PropTypes.array.isRequired,
  setActiveElement: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired
};

export default PlacesContainer;
