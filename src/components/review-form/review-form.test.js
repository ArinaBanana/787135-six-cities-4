import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form.jsx";

it(`Should render Review Form`, () => {
  const tree = renderer.create(
      <ReviewForm
        isLockedForm={false}
        placeId={0}
        onSubmit={() => {}}
        onChange={() => {}}
        isDisabledButton={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
