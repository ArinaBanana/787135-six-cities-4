import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import thunk from "redux-thunk";

const mockApi = {
  get: jest.fn(() => Promise.resolve({
    data: {}
  })),
  post: jest.fn(() => Promise.resolve({
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
    id: 8,
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

it(`Should render App`, () => {
  const store = mockStore({
    LOCATIONS: {
      currentLocation: `Amsterdam`,
      locations: [`Amsterdam`, `Paris`],
    },
    PLACES: {
      places,
    },
    REVIEWS: {
      reviews
    },
    USER: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
