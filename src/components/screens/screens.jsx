import React from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import DetailedInfoScreen from "../detailed-info-screen/detailed-info-screen.jsx";
import {PLACE} from "../../utils/url";

function Screens() {
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

Screens.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Screens;
