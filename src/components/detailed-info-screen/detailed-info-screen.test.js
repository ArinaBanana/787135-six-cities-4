import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import DetailedInfoScreen from "./detailed-info-screen.jsx";

const mockStore = configureStore([]);

const places = [
  {
    id: 7,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: `20%`,
    isPremium: false,
    isBookmark: true,
    iconUrl: `path`,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: `70%`,
    message: `message`,
    date: `date`,
  }
];

it(`Should render Detailed Info Screen`, () => {
  const store = mockStore({
    place: places[0],
    reviews,
    places
  });

  const tree = renderer.create(
      <Provider store={store}>
        <DetailedInfoScreen
          place={places[0]}
          reviews={reviews}
          nearPlaces={places}
          setActiveElement={() => {}}
          getReviews={() => {}}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
