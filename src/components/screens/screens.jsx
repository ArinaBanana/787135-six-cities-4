import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main-screen/import-component";
import DetailedInfoScreen from "../detailed-info-screen/import-component";
import {PLACE} from "../../utils/url";
import {ActionCreator as PlacesActionCreators} from "../../store/actions/places";

class Screens extends PureComponent {
  componentDidMount() {
    const {getPlaces} = this.props;
    getPlaces();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>
        <Route exact path={`${PLACE}:id`} render={(props) => {
          const placeId = Number(props.match.params.id);
          return <DetailedInfoScreen placeId={placeId}/>;
        }}>
        </Route>
      </Switch>
    );
  }
}

Screens.propTypes = {
  match: PropTypes.object,
  getPlaces: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPlaces: PlacesActionCreators.setPlaces,
};

export {Screens};
export default connect(null, mapDispatchToProps)(Screens);
