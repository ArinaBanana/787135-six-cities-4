import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../store/actions/user";

const withCheckAuth = (required = false) => (Component) => {
  class WithCheckAuth extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {checkAuth} = this.props;
      checkAuth(required);
    }

    render() {
      if (this.props.isChecking) {
        return null;
      }

      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithCheckAuth.propTypes = {
    checkAuth: PropTypes.func.isRequired,
    isChecking: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state) => ({
    isChecking: state.USER.isChecking
  });

  const mapDispatchToProps = {
    checkAuth: Operation.checkAuth,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCheckAuth);
};

export default withCheckAuth;
