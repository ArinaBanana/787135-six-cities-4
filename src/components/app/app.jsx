import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {countRentalOffer} = props;

  return (
    <MainScreen countRentalOffer={countRentalOffer} />
  );
};

App.propTypes = {
  countRentalOffer: PropTypes.number.isRequired,
};

export default App;
