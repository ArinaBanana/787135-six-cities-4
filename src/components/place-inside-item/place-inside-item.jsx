import React from "react";
import PropTypes from "prop-types";

function PlaceInsideItem({item}) {
  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
}

PlaceInsideItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default PlaceInsideItem;
