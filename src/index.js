import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const RentalOffer = {
  COUNT: 312,
};

ReactDOM.render(
    <App countRentalOffer={RentalOffer.COUNT} />,
    document.getElementById(`root`)
);
