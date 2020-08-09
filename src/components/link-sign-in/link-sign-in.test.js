import React from "react";
import renderer from "react-test-renderer";
import LinkSignIn from "./link-sign-in.jsx";

it(`Should render Link sign in`, () => {
  const tree = renderer.create(<LinkSignIn />).toJSON();

  expect(tree).toMatchSnapshot();
});
