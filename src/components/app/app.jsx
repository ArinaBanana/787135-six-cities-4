import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import DetailedInfoScreen from "../detailed-info-screen/detailed-info-screen.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleTitlePlaceClick = this.handleTitlePlaceClick.bind(this);
  }

  handleTitlePlaceClick(id) {
    return id;
  }

  render() {
    const {countPlaces, places} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen
              countPlaces={countPlaces}
              places={places}
              onTitleClick={this.handleTitlePlaceClick}
            />
          </Route>
          <Route exact path="/dev-detailed">
            <DetailedInfoScreen />
          </Route>
        </Switch>
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
