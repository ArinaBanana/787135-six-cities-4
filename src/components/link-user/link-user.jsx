import React from "react";
import PropTypes from "prop-types";

function LinkUser({email}) {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </a>
  );
}

LinkUser.propTypes = {
  email: PropTypes.string
};

export default LinkUser;
