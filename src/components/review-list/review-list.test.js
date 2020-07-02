import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list.jsx";

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: `70%`,
    message: `message`,
    date: `date`,
  }
];

it(`Should render Review List`, () => {
  const tree = renderer.create(<ReviewList reviews={reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
