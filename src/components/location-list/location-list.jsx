import React, {Component} from "react";
import Location from "../location/location.jsx";

const locations = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

class LocationList extends Component {
  constructor(props) {
    super(props);

    this._activeCity = `Amsterdam`;

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(city) {
    this._activeCity = city;
  }

  render() {
    return (
      <ul className="locations__list tabs__list">
        {
          locations.map((location, index) => {
            const isActive = location === this._activeCity;

            return <Location key={`${index}-${location}`} city={location} isActive={isActive} onTitleClick={this._handleTitleClick} />;
          })
        }
      </ul>
    );
  }
}

export default LocationList;
