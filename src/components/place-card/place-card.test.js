import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from "./place-card";

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

it(`Should render Place Card`, () => {
  const tree = renderer.create(<PlaceCard place={place} onTitleClick={() => {}} onMouseMove={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
