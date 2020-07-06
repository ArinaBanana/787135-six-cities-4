import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class NearPlacesList extends PureComponent {
  render() {
    const {nearPlaces} = this.props;

    return (
      <div className="near-places__list places__list">
        {nearPlaces.map((item) => <PlaceCard key={item.id} place={item} onMouseMove={() => {}} onTitleClick={() => {}}/>)}
      </div>
    );
  }
}

NearPlacesList.propTypes = {
  nearPlaces: PropTypes.array.isRequired
};

export default NearPlacesList;
