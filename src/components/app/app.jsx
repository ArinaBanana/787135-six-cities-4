import React from 'react';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countRentalOffer} = props;

  return (
    <MainScreen countRentalOffer={countRentalOffer} />
  );
};

export default App;
