import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const markers = [
  {
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

it(`Should render Map`, () => {
  const tree = renderer.create(<Map markers={markers} />, {createNodeMock: () => {
    return document.createElement(`div`);
  }}).toJSON();

  expect(tree).toMatchSnapshot();
});