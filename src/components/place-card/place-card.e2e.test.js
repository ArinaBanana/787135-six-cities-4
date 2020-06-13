import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        id={0}
        title={`Foo bar`}
        price={500}
        onTitleClick={onTitleClick} />
  );

  const title = placeCard.find(`.place-card__name`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
