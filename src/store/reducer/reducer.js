import {combineReducers} from "redux";
import {reducer as locations} from "./locations/locations";
import {reducer as places} from "./places/places";
import {reducer as reviews} from "./reviews/reviews";

export default combineReducers({
  LOCATIONS: locations,
  PLACES: places,
  REVIEWS: reviews
});
