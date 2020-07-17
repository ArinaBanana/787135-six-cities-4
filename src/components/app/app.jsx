import React, {PureComponent} from "react";
import {BrowserRouter} from "react-router-dom";
import Screens from "../screens/importComponent";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Screens />
      </BrowserRouter>
    );
  }
}

export default App;
