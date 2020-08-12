import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter()
});

const place = {
  id: 7,
  title: `Foo bar`,
  price: 45,
  img: `path`,
  type: `apartment`,
  rating: 3.5,
  isPremium: false,
  isBookmark: true
};

describe(`PlaceCard component`, () => {
  const onMouseMove = jest.fn();
  const component = shallow(
      <PlaceCard
        isFavoritePlace={false}
        onSetFavoritePlace={() => {}}
        place={place}
        onMouseMove={onMouseMove}
      />
  );

  it(`Should pass id in the mousemove handler`, () => {
    const placeCard = component.find(`.place-card`);
    placeCard.simulate(`mousemove`);

    expect(onMouseMove).toHaveBeenCalledWith(7);
  });
});


