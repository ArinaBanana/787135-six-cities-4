import React from "react";
import renderer from "react-test-renderer";
import PlaceInsideList from "./place-inside-list.jsx";

const items = [`WI-FI`, `Breakfast`];

it(`Should render Place inside list`, () => {
  const tree = renderer.create(<PlaceInsideList items={items} />).toJSON();

  expect(tree).toMatchSnapshot();
});
