import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter} from "react-router-dom";
import Screens from "../screens";

class App extends PureComponent {
  render() {
    const {countPlaces, places, reviews} = this.props;

    return (
      <BrowserRouter>
        <Screens places={places} countPlaces={countPlaces} reviews={reviews} />
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
