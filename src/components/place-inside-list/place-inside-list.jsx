import React from "react";
import PropTypes from "prop-types";
import PlaceInsideItem from "../place-inside-item/place-inside-item.jsx";

function PlaceInsideList({items}) {
  return (
    <ul className="property__inside-list">
      {items.map((item, index) => {
        return <PlaceInsideItem key={`${item}-${index}`} item={item} />;
      })}
    </ul>
  );
}

PlaceInsideList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PlaceInsideList;
