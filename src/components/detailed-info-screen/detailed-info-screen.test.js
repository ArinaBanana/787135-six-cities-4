import React from "react";
import renderer from "react-test-renderer";
import DetailedInfoScreen from "./detailed-info-screen.jsx";

it(`Should render Detailed Info Screen`, () => {
  const tree = renderer.create(<DetailedInfoScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
