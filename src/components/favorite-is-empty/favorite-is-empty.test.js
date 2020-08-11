import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteIsEmpty from "./favorite-is-empty.jsx";

const mockStore = configureStore([]);

it(`Should render Favorite is Empty`, () => {
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
          <FavoriteIsEmpty />
        </MemoryRouter>
      </Provider>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
