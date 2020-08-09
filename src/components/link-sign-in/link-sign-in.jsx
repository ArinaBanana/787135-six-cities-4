import React from "react";

function LinkSignIn() {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </a>
  );
}

export default LinkSignIn;
