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
    isBookmark: true,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    id: 9,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: `80%`,
    isPremium: true,
    isBookmark: true,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

it(`Should render Main Screen`, () => {
  const tree = renderer.create(<MainScreen countPlaces={6758} places={places} onTitleClick={()=> {}} />, {createNodeMock: () => {
    return document.createElement(`div`);
  }}).toJSON();

  expect(tree).toMatchSnapshot();
});
