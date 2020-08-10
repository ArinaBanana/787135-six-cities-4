import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../store/actions/user";

const withCheckAuth = (Component) => {
  class WithCheckAuth extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {checkAuth} = this.props;
      checkAuth();
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithCheckAuth.propTypes = {
    checkAuth: PropTypes.func.isRequired
  };

  const mapDispatchToProps = {
    checkAuth: Operation.checkAuth,
  };

  return connect(null, mapDispatchToProps)(WithCheckAuth);
};

export default withCheckAuth;
