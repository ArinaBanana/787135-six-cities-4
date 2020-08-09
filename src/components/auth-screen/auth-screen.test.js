import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";

it(`Should render Auth Screen`, () => {
  const tree = renderer.create(<AuthScreen onSubmit={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
