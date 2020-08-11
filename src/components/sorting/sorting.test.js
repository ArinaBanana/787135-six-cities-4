import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting.jsx";

it(`Should render Sorting`, () => {
  const tree = renderer.create(
      <Sorting
        isHidden={false}
        onClick={() => {}}
        onChangeSortType={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
