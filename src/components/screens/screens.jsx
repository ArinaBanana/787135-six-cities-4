import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main-screen/import-component";
import DetailedInfoScreen from "../detailed-info-screen/import-component";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import FavoriteScreen from "../favorite-screen/import-component";

import {PLACE} from "../../utils/url";
import {Operation as PlacesOperation} from "../../store/actions/places";
import {Operation as UserOperation} from "../../store/actions/user";

class Screens extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getPlaces} = this.props;
    getPlaces();
  }

  render() {
    const {login} = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path={`${PLACE}:id`} render={(props) => {
          const placeId = Number(props.match.params.id);
          return <DetailedInfoScreen placeId={placeId}/>;
        }}>
        </Route>
        <Route exact path={`/login`}>
          <AuthScreen onSubmit={login} />
        </Route>
        <Route exact path={`/favorites`}>
          <FavoriteScreen />
        </Route>
      </Switch>
    );
  }
}

Screens.propTypes = {
  match: PropTypes.object,
  getPlaces: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPlaces: PlacesOperation.loadPlaces,
  login: UserOperation.login
};

export {Screens};
export default connect(null, mapDispatchToProps)(Screens);
