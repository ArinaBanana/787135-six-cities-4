import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from "./main-screen";

const places = [
  {
    id: 7,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: `20%`,
    isPremium: false,
    isBookmark: true
  },
  {
    id: 9,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: `80%`,
    isPremium: true,
    isBookmark: true
  }
];

it(`Should render Main Screen`, () => {
  const tree = renderer.create(<MainScreen countPlaces={6758} places={places} onTitleClick={()=> {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
