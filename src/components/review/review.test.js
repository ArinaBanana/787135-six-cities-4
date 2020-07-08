import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 1,
  username: `Jon`,
  rating: `70%`,
  message: `message`,
  date: `date`,
};

it(`Should render Review`, () => {
  const tree = renderer.create(<Review review={review} />).toJSON();

  expect(tree).toMatchSnapshot();
});
