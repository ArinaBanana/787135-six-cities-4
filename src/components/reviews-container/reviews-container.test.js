import React from "react";
import renderer from "react-test-renderer";
import ReviewsContainer from "./reviews-container.jsx";

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: `70%`,
    message: `message`,
    date: `date`,
  }
];

it(`Should render Reviews Container`, () => {
  const tree = renderer.create(<ReviewsContainer reviews={reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
