import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 1,
  username: `Jon`,
  rating: 4,
  message: `message`,
  date: `2020-08-10T11:39:43.926Z`,
  userAvatar: `path`,
  isPro: true,
};

it(`Should render Review`, () => {
  const tree = renderer.create(<Review review={review} />).toJSON();

  expect(tree).toMatchSnapshot();
});
