import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHiddenAttribute from "./with-hidden-attribute";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {isHidden} = props;

  return (
    <div>
      {isHidden ? `` : <div />}
    </div>
  );
};

MockComponent.propTypes = {
  isHidden: PropTypes.bool.isRequired
};

it(`HOC passes the value is hidden`, () => {
  const MockComponentWrapped = withHiddenAttribute(MockComponent);
  const wrapper = mount(<MockComponentWrapped />);

  expect(wrapper.html()).not.toBe(null);
});
