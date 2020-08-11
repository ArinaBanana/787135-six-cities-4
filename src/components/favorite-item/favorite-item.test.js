import React from "react";
import renderer from "react-test-renderer";
import FavoriteItem from "./favorite-item.jsx";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const place = {
  id: 7,
  title: `Foo bar`,
  price: 45,
  img: `path`,
  type: `apartment`,
  rating: 3.5,
  isPremium: false,
  isBookmark: true,
  iconUrl: `path`,
  coordinates: [52.3809553943508, 4.939309666406198],
  city: {
    name: `City`,
    coordinates: [52.38333, 4.9],
    zoom: 12
  }
};

it(`Should render Favorite item`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      user: {
        email: `path`
      }
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <FavoriteItem favoritePlace={place}/>
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
