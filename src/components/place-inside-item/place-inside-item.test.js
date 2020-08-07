import React from "react";
import renderer from "react-test-renderer";
import PlaceInsideItem from "./place-inside-item.jsx";

it(`Should render Place inside item`, () => {
  const tree = renderer.create(<PlaceInsideItem item={`WI-FI`} />).toJSON();

  expect(tree).toMatchSnapshot();
});
