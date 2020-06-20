import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter} from "react-router-dom";
import Screens from "../screens";

class App extends PureComponent {
  render() {
    const {countPlaces, places} = this.props;

    return (
      <BrowserRouter>
        <Screens places={places} countPlaces={countPlaces} />
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }))
};

export default App;
