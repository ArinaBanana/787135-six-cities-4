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

const getFavoritePlaces = (state) => state.PLACES.favoritePlaces;
const getSortedByCityFavoritePlaces = createSelector(
    getFavoritePlaces,
    (places) => {
      const result = places.slice();

      return result.sort((a, b) => {
        if (a.city.name > b.city.name) {
          return 1;
        }
        if (a.city.name < b.city.name) {
          return -1;
        }

        return 0;
      });
    }
);

export {getActivePlace, getPlacesByCurrentLocation, getSortedByCityFavoritePlaces};
