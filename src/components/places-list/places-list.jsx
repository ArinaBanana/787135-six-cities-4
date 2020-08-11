import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {throttle} from "../../utils/func";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.throttledHandleMouseMove = throttle(this.props.setActiveElement, 200);
  }

  render() {
    const {places, isNearList} = this.props;

    return (
      <div className={isNearList ? `near-places__list places__list` : `cities__places-list places__list tabs__content`}>
        {
          places.map((place) => <PlaceCard
            key={place.id}
            place={place}
            onMouseMove={this.throttledHandleMouseMove}
            isFavoritePlace={false}
          />)
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  isNearList: PropTypes.bool.isRequired,
  setActiveElement: PropTypes.func.isRequired
};

export default PlacesList;
