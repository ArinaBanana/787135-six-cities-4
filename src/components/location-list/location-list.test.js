import React from "react";
import renderer from "react-test-renderer";
import {LocationList} from "./location-list.jsx";

const locations = [`City`];

it(`Should render Location Lis`, () => {
  const tree = renderer.create(<LocationList
    locations={locations}
    currentLocation={`City`}
    onTitleClick={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
