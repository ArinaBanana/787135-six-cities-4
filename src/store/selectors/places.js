import {createSelector} from "reselect";
import {getLocation} from "./location";

const getPlaces = (state) => state.PLACES.places;
const getCurrentPlaceId = (state, props) => props.placeId;

const getActivePlace = createSelector(
    getPlaces,
    getCurrentPlaceId,
    (places, placeId) => {

      if (!places || !places.length) {
        return null;
      }

      return places.find((item) => item.id === placeId);
    }
);

const getPlacesByCurrentLocation = createSelector(
    getLocation,
    getPlaces,
    (location, places) => {
      return places.filter((place) => {
        return place.city.name === location;
      });
    }
);

export {getActivePlace, getPlacesByCurrentLocation};
