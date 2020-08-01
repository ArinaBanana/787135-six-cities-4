import {createStore} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./reducer/reducer";
import createApi from "./../api";
import {Operation as PlacesOperation} from "./actions/places";

const api = createApi(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(PlacesOperation.setPlaces());

export default store;
