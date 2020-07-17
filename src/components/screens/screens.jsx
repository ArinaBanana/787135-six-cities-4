import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main-screen/main-screen.jsx";
import DetailedInfoScreen from "../detailed-info-screen/detailed-info-screen.jsx";
import {getPlacesByCurrentLocation} from "../../store/selectors/places";
import {PLACE} from "../../utils/url";

class Screens extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {countPlaces, places} = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <MainScreen
            countPlaces={countPlaces}
            places={places}
          />
        </Route>
        <Route exact path={`${PLACE}:id`} render={(props) => {
          const placeId = Number(props.match.params.id);
          return <DetailedInfoScreen placeId={placeId} />;
        }}>
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  places: getPlacesByCurrentLocation(state),
  countPlaces: state.places.length,
  reviews: state.reviews
});

Screens.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  history: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export {Screens};
export default connect(mapStateToProps)(Screens);
