import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveElement from "./with-active-element";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {setActiveElement} = props;

  return (
    <ul>
      <li onClick={setActiveElement} />
    </ul>
  );
};

MockComponent.propTypes = {
  setActiveElement: PropTypes.func.isRequired
};

it(`Checks that HOC's the callback sets the active element`, () => {
  const MockComponentWrapped = withActiveElement(MockComponent);
  MockComponentWrapped.prototype.setActiveElement = jest.fn();

  const wrapper = mount(<MockComponentWrapped/>);
  wrapper.find(`li`).simulate(`click`);

  expect(MockComponentWrapped.prototype.setActiveElement).toHaveBeenCalled();
});
