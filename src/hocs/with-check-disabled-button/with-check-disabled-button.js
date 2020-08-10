import React, {PureComponent} from "react";

const withCheckDisabledButton = (Component) => {
  class WithCheckDisabledButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isDisabledButton: true,
      };

      this.checkDisabledButton = this.checkDisabledButton.bind(this);
    }

    checkDisabledButton(isCheck) {
      const {isDisabledButton} = this.state;

      if (isDisabledButton === isCheck) {
        return;
      }

      this.setState({
        isDisabledButton: isCheck
      });
    }

    render() {
      const {isDisabledButton} = this.state;

      return (
        <Component
          {...this.props}
          isDisabledButton={isDisabledButton}
          onChange={this.checkDisabledButton}
        />
      );
    }
  }

  return WithCheckDisabledButton;
};

export default withCheckDisabledButton;
