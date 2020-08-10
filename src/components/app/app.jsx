import React from "react";
import {Router} from "react-router-dom";
import Screens from "../screens/import-component";
import history from "../../history/history";

function App() {
  return (
    <Router history={history}>
      <Screens/>
    </Router>
  );
}

export default App;
