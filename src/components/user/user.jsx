import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import LinkUser from "../link-user/link-user.jsx";
import LinkSignIn from "../link-sign-in/link-sign-in.jsx";

function User({user, isAuth}) {
  if (!user) {
    return null;
  }

  return (
    <li className="header__nav-item user">
      {
        isAuth ? <LinkUser email={user.email} /> : <LinkSignIn />
      }
    </li>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.USER.user,
  };
};

export {User};
export default connect(mapStateToProps)(User);
