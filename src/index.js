import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {COUNT_PLACES, generatePlaces} from './mocks/offers';

const places = generatePlaces();

ReactDOM.render(
    <App
      countPlaces={COUNT_PLACES}
      places={places}
    />,
    document.getElementById(`root`)
);
