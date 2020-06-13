import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = ({countPlaces, places}) => {
  return (
    <MainScreen
      countPlaces={countPlaces}
      places={places}
    />
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }))
};

export default App;
