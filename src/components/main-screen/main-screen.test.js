import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from "./main-screen";

const places = [
  {id: 0, title: `Foo`, price: 20},
  {id: 1, title: `Bar`, price: 450}
];

it(`Should render Main Screen`, () => {
  const tree = renderer.create(<MainScreen countPlaces={6758} places={places} onTitleClick={()=> {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
