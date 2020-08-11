import React, {PureComponent} from "react";

const withHiddenAttribute = (Component) => {
  class WithHiddenAttribute extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHidden: true,
      };

      this.setHidden = this.setHidden.bind(this);
    }

    setHidden(hide) {
      const {isHidden} = this.state;

      if (hide === isHidden) {
        return;
      }

      this.setState({
        isHidden: hide,
      });
    }

    render() {
      const {isHidden} = this.state;

      return (
        <Component
          {...this.props}
          isHidden={isHidden}
          onClick={this.setHidden}
        />
      );
    }
  }

  return WithHiddenAttribute;
};

export default withHiddenAttribute;
