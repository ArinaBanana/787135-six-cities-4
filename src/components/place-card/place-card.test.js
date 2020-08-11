import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {PlaceCard} from "./place-card";

const place = {
  id: 7,
  title: `Foo bar`,
  price: 45,
  img: `path`,
  type: `apartment`,
  rating: 3.5,
  isPremium: false,
  isBookmark: true
};

it(`Should render Place Card`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PlaceCard isFavoritePlace={false} setFavoritePlace={() => {}} place={place} onMouseMove={() => {}} />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
