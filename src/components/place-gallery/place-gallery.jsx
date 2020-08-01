import React from "react";
import PropTypes from "prop-types";
import PlaceImage from "../place-image/place-image.jsx";

function PlaceGallery({images}) {
  return (
    <div className="property__gallery">
      {images.map((image, index) => {
        return <PlaceImage key={`img-${index}`} path={image} />;
      })}
    </div>
  );
}

PlaceGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default PlaceGallery;
