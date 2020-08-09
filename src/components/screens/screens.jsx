import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main-screen/import-component";
import DetailedInfoScreen from "../detailed-info-screen/import-component";
import AuthScreen from "../sign-in/auth-screen.jsx";

import {PLACE} from "../../utils/url";
import {Operation as PlacesOperation} from "../../store/actions/places";
import {Operation as UserOperation} from "../../store/actions/user";

import {getAuthorizationStatus} from "../../store/selectors/user";

class Screens extends PureComponent {
  componentDidMount() {
    const {getPlaces, login} = this.props;
    getPlaces();
    login({});
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
        <Route exact path={`/login`}>
          <AuthScreen onSubmit={() => {}} />
        </Route>
      </Switch>
    );
  }
}

Screens.propTypes = {
  match: PropTypes.object,
  getPlaces: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = {
  getPlaces: PlacesOperation.loadPlaces,
  login: UserOperation.login
};

export {Screens};
export default connect(mapStateToProps, mapDispatchToProps)(Screens);
