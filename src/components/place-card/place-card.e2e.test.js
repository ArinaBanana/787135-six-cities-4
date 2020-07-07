import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter()
});

const place = {
  id: 7,
  title: `Foo bar`,
  price: 45,
  img: `path`,
  type: `apartment`,
  rating: `20%`,
  isPremium: false,
  isBookmark: true
};

describe(`PlaceCard component`, () => {
  const onTitleClick = jest.fn();
  const onMouseMove = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        place={place}
        onTitleClick={onTitleClick}
        onMouseMove={onMouseMove}
      />
  );

  it(`Should on title click called`, () => {
    const title = placeCard.find(`.place-card__name`);
    title.props().onClick();

    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });

  it(`Should pass id in the mousemove handler`, () => {
    const article = placeCard.find(`.place-card`);
    article.simulate(`mousemove`);

    expect(onMouseMove).toHaveBeenCalledWith(7);
  });
});


