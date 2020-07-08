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
    isBookmark: true,
    coordinates: [52.3909553943508, 4.85309666406198]
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

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: `70%`,
    message: `message`,
    date: `date`,
  }
];

describe(`Screens snapshots`, () => {
  it(`Should render main screen`, () => {
    const tree = renderer.create(<MemoryRouter initialEntries={[`/`]}>
      <ScreensWithRouter countPlaces={67} places={places} reviews={reviews} />
    </MemoryRouter>, {createNodeMock: () => {
      return document.createElement(`div`);
    }}).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render detail info screen`, () => {
    const component = renderer.create(<MemoryRouter initialEntries={[`/`]}>
      <ScreensWithRouter countPlaces={67} places={places} reviews={reviews} />
    </MemoryRouter>, {createNodeMock: () => {
      return document.createElement(`div`);
    }});

    const instance = component.root.findByType(Screens).instance;
    instance._handlePlaceClick(places[0]);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
