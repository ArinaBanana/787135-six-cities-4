import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";
import Sorting from "../sorting/import-component";

class PlacesContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(type) {
    const {changeSortType} = this.props;
    changeSortType(type);
  }

  render() {
    const {places, markers, currentLocation, setActiveElement, zoom, city} = this.props;

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{places.length} places to stay in {currentLocation}</b>

          <Sorting
            onChangeSortType={this.changeSort}
          />

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
}

PlacesContainer.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  markers: PropTypes.array.isRequired,
  setActiveElement: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

export default PlacesContainer;
