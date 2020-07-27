import React from "react";
import renderer from "react-test-renderer";
import NoPlacesInCity from "./no-places-in-city.jsx";

it(`Should render No places in city`, () => {
  const tree = renderer.create(<NoPlacesInCity location={`Amsterdam`} />).toJSON();

  expect(tree).toMatchSnapshot();
});
