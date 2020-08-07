import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Screens} from "./screens";

const mockApi = {
  get: jest.fn(() => Promise.resolve({
    data: {}
  })),
};
const middlewares = [thunk.withExtraArgument(mockApi)];
const mockStore = configureStore(middlewares);

const places = [
  {
    id: 7,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: 3.5,
    isPremium: false,
    isBookmark: true,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    description: `Foo. Bar.`,
    allImages: [`path`, `path`],
    goods: [`Foo`, `Bar`],
    host: {
      avatar: `path`,
      name: `Carry`,
      isPro: false,
    },
    bedrooms: 3,
    adults: 2,
  },
  {
    id: 9,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: 5,
    isPremium: true,
    isBookmark: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    description: `Foo. Bar.`,
    allImages: [`path`, `path`],
    goods: [`Foo`, `Bar`],
    host: {
      avatar: `path`,
      name: `Carry`,
      isPro: false,
    },
    bedrooms: 3,
    adults: 2,
  }
];

const nearPlaces = [
  {
    id: 5,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: 3,
    isPremium: false,
    isBookmark: false,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    description: `Foo. Bar.`,
    allImages: [`path`, `path`],
    goods: [`Foo`, `Bar`],
    host: {
      avatar: `path`,
      name: `Carry`,
      isPro: false,
    },
    bedrooms: 3,
    adults: 2,
  },
  {
    id: 6,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: 4.5,
    isPremium: true,
    isBookmark: false,
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    description: `Foo. Bar.`,
    allImages: [`path`, `path`],
    goods: [`Foo`, `Bar`],
    host: {
      avatar: `path`,
      name: `Carry`,
      isPro: false,
    },
    bedrooms: 3,
    adults: 2,
  }
];

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: 4,
    message: `message`,
    date: `date`,
    userAvatar: `path`,
    isPro: true,
  }
];

describe(`Screens snapshots`, () => {
  it(`Should render main screen`, () => {
    const store = mockStore({
      LOCATIONS: {
        currentLocation: `Amsterdam`,
        locations: [`Amsterdam`, `Paris`],
      },
      PLACES: {
        places,
      }
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
      LOCATIONS: {
        currentLocation: `Amsterdam`,
        locations: [`Amsterdam`, `Paris`],
      },
      PLACES: {
        places,
        nearPlaces
      },
      REVIEWS: {
        reviews
      }
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
