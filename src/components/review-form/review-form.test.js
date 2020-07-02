import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

it(`Should render Review Form`, () => {
  const tree = renderer.create(<ReviewForm />).toJSON();

  expect(tree).toMatchSnapshot();
});
