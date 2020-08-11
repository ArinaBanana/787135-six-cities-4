import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";

import User from "./user.jsx";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe(`Should render User`, () => {
  it(`Should render User with false isAuth`, () => {
    const store = mockStore({
      USER: {
        user: null,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <User isAuth={false} />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render User with true isAuth`, () => {
    const store = mockStore({
      USER: {
        user: {
          email: `email`
        },
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <User isAuth={true} />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
