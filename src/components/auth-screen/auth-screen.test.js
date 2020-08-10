import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import AuthScreen from "./auth-screen.jsx";

it(`Should render Auth Screen`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <AuthScreen onSubmit={() => {}} />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
