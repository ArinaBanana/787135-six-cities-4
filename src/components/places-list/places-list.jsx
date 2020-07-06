import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {throttle} from "../../utils/func";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this.throttledHandleMouseMove = throttle(this.handleMouseMove, 200);

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(placeId) {
    const {activeCard} = this.state;

    if (activeCard === placeId) {
      return;
    }

    this.setState({
      activeCard: placeId
    });
  }

  render() {
    const {places, onTitleClick, isNearList} = this.props;

    return (
      <div className={isNearList ? `near-places__list places__list` : `cities__places-list places__list tabs__content`}>
        {
          places.map((place) => <PlaceCard
            key={place.id}
            place={place}
            onTitleClick={onTitleClick}
            onMouseMove={this.throttledHandleMouseMove}
          />)
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  onTitleClick: PropTypes.func.isRequired,
  isNearList: PropTypes.bool.isRequired
};

export default PlacesList;
