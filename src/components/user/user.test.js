import React from "react";
import renderer from "react-test-renderer";
import User from "./user.jsx";

describe(`Should render User`, () => {
  it(`Should render User with false isAuth`, () => {
    const tree = renderer.create(<User isAuth={false}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render User with true isAuth`, () => {
    const tree = renderer.create(<User email={`email`} isAuth={true}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
