import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list.jsx";

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: 4,
    message: `message`,
    date: `2020-08-10T11:39:43.926Z`,
    userAvatar: `path`,
    isPro: true,
  }
];

it(`Should render Review List`, () => {
  const tree = renderer.create(<ReviewList reviews={reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
