import React from "react";
import renderer from "react-test-renderer";
import DetailedInfoScreen from "./detailed-info-screen.jsx";

const places = [
  {
    id: 7,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: `20%`,
    isPremium: false,
    isBookmark: true,
    color: `path`,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

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
  const tree = renderer.create(<DetailedInfoScreen
    place={places[0]}
    reviews={reviews}
    nearPlaces={places} />, {createNodeMock: () => {
    return document.createElement(`div`);
  }}).toJSON();

  expect(tree).toMatchSnapshot();
});
