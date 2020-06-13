import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const places = [
  {id: 0, title: `Foo`, price: 20},
  {id: 1, title: `Bar`, price: 450}
];

it(`Should render App`, () => {
  const tree = renderer.create(<App countPlaces={312} places={places} />).toJSON();

  expect(tree).toMatchSnapshot();
});
