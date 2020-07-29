import {createSelector} from "reselect";
import {getLocation} from "./location";
import getPlacesWithIconForMap from "../../utils/places";

const getPlaces = (state) => state.PLACES.places;
const getCurrentPlaceId = (state, props) => props.placeId;

const getActivePlaceAndNearPlaces = createSelector(
    getPlaces,
    getCurrentPlaceId,
    (places, placeId) => {

      if (!places || !places.length) {
        return {
          activePlace: null,
          nearPlaces: []
        };
      }

      const allPlaces = getPlacesWithIconForMap(places, placeId);
      const activePlace = allPlaces.find((item) => item.isActiveMarker);

      // В этом месте фильтровать так же по условию "находятся рядом"
      const nearPlaces = allPlaces.filter((item) => item !== activePlace).slice(0, 3);

      return {activePlace, nearPlaces};
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

export {getActivePlaceAndNearPlaces, getPlacesByCurrentLocation};
