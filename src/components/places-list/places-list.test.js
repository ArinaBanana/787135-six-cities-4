import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import PlacesList from "./places-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const middlewares = [];
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
    isBookmark: true
  },
  {
    id: 9,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: 4,
    isPremium: true,
    isBookmark: true
  }
];

it(`Should render Places List`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <PlacesList places={places} isNearList={false} setActiveElement={() => {}} />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
