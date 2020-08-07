import {createStore} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./reducer/reducer";
import createApi from "./../api";

const api = createApi(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
