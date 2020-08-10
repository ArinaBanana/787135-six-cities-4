import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import {reducer as locations} from "./locations/locations";
import {reducer as places} from "./places/places";
import {reducer as reviews} from "./reviews/reviews";
import {reducer as user} from "./user/user";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  LOCATIONS: locations,
  PLACES: places,
  REVIEWS: reviews,
  USER: user,
});

export default createRootReducer;
