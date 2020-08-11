import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function LinkUser({email}) {
  return (
    <Link to={`/favorites`} className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </Link>
  );
}

LinkUser.propTypes = {
  email: PropTypes.string.isRequired
};

export default LinkUser;
