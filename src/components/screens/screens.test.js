import React from "react";
import renderer from "react-test-renderer";
import ScreensWithRouter from "./screensWithRouter";
import Screens from "./screens";
import {MemoryRouter} from "react-router-dom";

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

describe(`Screens snapshots`, () => {
  it(`Should render main screen`, () => {
    const tree = renderer.create(<MemoryRouter initialEntries={[`/`]}>
      <ScreensWithRouter countPlaces={67} places={places} />
    </MemoryRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render detail info screen`, () => {
    const component = renderer.create(<MemoryRouter initialEntries={[`/`]}>
      <ScreensWithRouter countPlaces={67} places={places} />
    </MemoryRouter>);

    const instance = component.root.findByType(Screens).instance;
    instance.handlePlaceClick(places[0]);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});