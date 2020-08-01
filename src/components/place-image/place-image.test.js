import React from "react";
import renderer from "react-test-renderer";
import PlaceImage from "./place-image.jsx";

it(`Should render Place image`, () => {
  const tree = renderer.create(<PlaceImage path={`path`} />).toJSON();

  expect(tree).toMatchSnapshot();
});
