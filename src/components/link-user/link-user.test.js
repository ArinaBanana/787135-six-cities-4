import React from "react";
import renderer from "react-test-renderer";
import LinkUser from "./link-user.jsx";
import {MemoryRouter} from "react-router-dom";

it(`Should render link user`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <LinkUser email={`email`} />
      </MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
