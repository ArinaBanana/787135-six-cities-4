import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from "./place-card";

it(`Should render Place Card`, () => {
  const tree = renderer.create(<PlaceCard title={`Foo bar`} price={64748} onTitleClick={() => {}} id={9} />).toJSON();

  expect(tree).toMatchSnapshot();
});
