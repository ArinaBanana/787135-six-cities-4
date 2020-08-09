import {createStore} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionCreator} from "./actions/user";
import {AuthorizationStatus} from "./reducer/user/user";

import reducer from "./reducer/reducer";
import createApi from "./../api";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};
const api = createApi(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
