import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {AuthScreen} from "./auth-screen.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`Should render Auth Screen`, () => {
  const store = mockStore({
    USER: {
      isChecking: false
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AuthScreen isAuth={true} replace={() => {}} onSubmit={() => {}} />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
