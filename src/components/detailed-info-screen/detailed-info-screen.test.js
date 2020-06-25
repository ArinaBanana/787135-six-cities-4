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

it(`Should render Detailed Info Screen`, () => {
  const tree = renderer.create(<DetailedInfoScreen place={place} />).toJSON();

  expect(tree).toMatchSnapshot();
});
