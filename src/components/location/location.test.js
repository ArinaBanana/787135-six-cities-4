import React from "react";
import renderer from "react-test-renderer";
import Location from "./location.jsx";

it(`Should render Location`, () => {
  const tree = renderer.create(<Location city={`City`} isActive={false} onTitleClick={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
