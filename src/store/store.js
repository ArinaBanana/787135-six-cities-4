import {createStore} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {routerMiddleware} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionCreator} from "./actions/user";
import {AuthorizationStatus} from "./reducer/user/user";
import history from "../history/history";

import createRootReducer from "./reducer/reducer";
import createApi from "./../api";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};
const api = createApi(onUnauthorized);

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api))
    )
);

export default store;
