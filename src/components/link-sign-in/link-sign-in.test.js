import React from "react";
import renderer from "react-test-renderer";
import LinkSignIn from "./link-sign-in.jsx";
import {MemoryRouter} from "react-router-dom";

it(`Should render Link sign in`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <LinkSignIn />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
