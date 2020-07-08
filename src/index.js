import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generatePlaces} from "./mocks/offers";
import {reviews} from "./mocks/reviews";

const places = generatePlaces();

ReactDOM.render(
    <App
      countPlaces={places.length}
      places={places}
      reviews={reviews}
    />,
    document.getElementById(`root`)
);
