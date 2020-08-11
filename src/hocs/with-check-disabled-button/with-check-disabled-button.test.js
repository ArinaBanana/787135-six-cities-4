import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCheckDisabledButton from "./with-check-disabled-button";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {isDisabledButton} = props;

  return (
    <button disabled={isDisabledButton} />
  );
};

MockComponent.propTypes = {
  isDisabledButton: PropTypes.bool.isRequired
};

it(`HOC set disabled attribute`, () => {
  const MockComponentWrapped = withCheckDisabledButton(MockComponent);
  const wrapper = mount(<MockComponentWrapped />);

  expect(wrapper.find(`button`).props()[`disabled`]).toBe(true);
});
