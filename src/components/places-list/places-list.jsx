import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  render() {
    const {places, onTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {
          places.map((place) => <PlaceCard
            key={place.id}
            place={place}
            onTitleClick={onTitleClick}/>)
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  onTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
