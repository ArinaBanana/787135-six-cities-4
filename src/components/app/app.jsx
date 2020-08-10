import React from "react";
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from "react-redux";
import Screens from "../screens/import-component";
import history from "../../history/history";
import store from "../../store/store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Screens/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
