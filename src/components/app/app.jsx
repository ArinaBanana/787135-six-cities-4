import React from "react";
import {BrowserRouter} from "react-router-dom";
import Screens from "../screens/importComponent";

function App() {
  return (
    <BrowserRouter>
      <Screens/>
    </BrowserRouter>
  );
}

export default App;
