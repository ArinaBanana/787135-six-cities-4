import React, {PureComponent} from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: -1
      };

      this.setActiveElement = this.setActiveElement.bind(this);
    }

    setActiveElement(element) {
      const {activeElement} = this.state;

      if (activeElement === element) {
        return;
      }

      this.setState({
        activeElement: element
      });
    }

    render() {
      const {activeElement} = this.state;

      return (
        <Component
          {...this.props}
          onSetActiveElement={this.setActiveElement}
          activeElement={activeElement}
        />
      );
    }
  }

  return WithActiveElement;
};

export default withActiveElement;
