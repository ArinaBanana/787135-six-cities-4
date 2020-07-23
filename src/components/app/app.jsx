import React from "react";
import {BrowserRouter} from "react-router-dom";
import Screens from "../screens/import-component";

function App() {
  return (
    <BrowserRouter>
      <Screens/>
    </BrowserRouter>
  );
}

export default App;
