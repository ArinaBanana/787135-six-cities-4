import React from "react";
import renderer from "react-test-renderer";
import LinkUser from "./link-user.jsx";

it(`Should render link user`, () => {
  const tree = renderer.create(<LinkUser email={`email`} />).toJSON();

  expect(tree).toMatchSnapshot();
});
