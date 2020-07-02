import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {COUNT_PLACES, generatePlaces} from "./mocks/offers";
import {reviews} from "./mocks/reviews";

const places = generatePlaces();

ReactDOM.render(
    <App
      countPlaces={COUNT_PLACES}
      places={places}
      reviews={reviews}
    />,
    document.getElementById(`root`)
);
