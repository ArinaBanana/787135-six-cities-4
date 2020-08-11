import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

function FavoriteItem({favoritePlace}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{favoritePlace.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCard isFavoritePlace={true} place={favoritePlace} onMouseMove={() =>{}} />
      </div>
    </li>
  );
}

FavoriteItem.propTypes = {
  favoritePlace: PropTypes.object.isRequired
};

export default FavoriteItem;
