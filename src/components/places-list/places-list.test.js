import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import PlacesList from "./places-list";

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

it(`Should render Places List`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PlacesList places={places} isNearList={false} />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
