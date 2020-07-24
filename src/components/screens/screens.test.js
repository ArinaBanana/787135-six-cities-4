import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Screens} from "./screens";

const mockStore = configureStore([]);

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
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    }
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
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    }
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
    const store = mockStore({
      currentLocation: `Amsterdam`,
      locations: [`Amsterdam`, `Paris`],
      places,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/`]}>
            <Screens getPlaces={() => {}} />
          </MemoryRouter>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render detail info screen`, () => {
    const store = mockStore({
      currentLocation: `Amsterdam`,
      locations: [`Amsterdam`, `Paris`],
      places,
      reviews
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/place/7`]}>
            <Screens getPlaces={() => {}} />
          </MemoryRouter>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
