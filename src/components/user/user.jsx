import React from "react";
import PropTypes from "prop-types";
import LinkUser from "../link-user/link-user.jsx";
import LinkSignIn from "../link-sign-in/link-sign-in.jsx";

function User({isAuth, email}) {
  return (
    <li className="header__nav-item user">
      {
        isAuth ? <LinkUser email={email} /> : <LinkSignIn />
      }
    </li>
  );
}

User.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default User;
