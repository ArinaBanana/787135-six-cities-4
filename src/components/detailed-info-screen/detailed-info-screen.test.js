import React from "react";
import renderer from "react-test-renderer";
import DetailedInfoScreen from "./detailed-info-screen.jsx";

const place = {
  id: 7,
  title: `Foo bar`,
  price: 45,
  img: `path`,
  type: `apartment`,
  rating: `20%`,
  isPremium: false,
  isBookmark: true
};

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: `70%`,
    message: `message`,
    date: `date`,
  }
];

it(`Should render Detailed Info Screen`, () => {
  const tree = renderer.create(<DetailedInfoScreen place={place} reviews={reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
