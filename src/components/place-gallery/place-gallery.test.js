import React from "react";
import renderer from "react-test-renderer";
import PlaceGallery from "./place-gallery.jsx";

const images = [`path`, `path`];

it(`Should render Place Gallery`, () => {
  const tree = renderer.create(<PlaceGallery images={images} />).toJSON();

  expect(tree).toMatchSnapshot();
});
