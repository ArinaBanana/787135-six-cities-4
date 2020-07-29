import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions/location";

import Location from "../location/location.jsx";

class LocationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {locations, currentLocation, onTitleClick} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {
          locations.map((location, index) => {
            const isActive = location === currentLocation;

            return <Location
              key={`${index}-${location}`}
              city={location}
              isActive={isActive}
              onTitleClick={onTitleClick} />;
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.LOCATIONS.locations,
  currentLocation: state.LOCATIONS.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(city) {
    dispatch(ActionCreator.setLocation(city));
  }
});

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentLocation: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
