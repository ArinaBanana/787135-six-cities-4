import {createSelector} from "reselect";
import {getLocation} from "./location";

const getPlaces = (state) => state.places;
const getCurrentPlaceId = (state, props) => props.placeId;

const getPlacesWithIcons = createSelector(
    getPlaces,
    getCurrentPlaceId,
    (places, placeId) => {

      if (!places || !places.length) {
        return {
          activePlace: null,
          nearPlaces: []
        };
      }

      const allPlaces = places.map((it) => {
        const isActiveMarker = it.id === placeId;
        const iconUrl = isActiveMarker ? `/img/pin-active.svg` : `/img/pin.svg`;

        return Object.assign({}, ...[it], {iconUrl, isActiveMarker});
      });

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

export {getPlacesWithIcons, getPlacesByCurrentLocation};
