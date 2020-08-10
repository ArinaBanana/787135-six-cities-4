import React from "react";
import {Link} from "react-router-dom";
import {getUrlByLogin} from "../../utils/url";

function LinkSignIn() {
  return (
    <Link to={getUrlByLogin()} className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );
}

export default LinkSignIn;
