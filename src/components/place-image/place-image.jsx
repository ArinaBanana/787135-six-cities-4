import React from "react";
import PropTypes from "prop-types";

function PlaceImage({path}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={path} alt="Photo studio"/>
    </div>
  );
}

PlaceImage.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PlaceImage;
