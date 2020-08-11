import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {FavoriteScreen} from "./favorite-screen.jsx";

const places = [
  {
    id: 7,
    title: `Foo bar`,
    price: 45,
    img: `path`,
    type: `apartment`,
    rating: 3.5,
    isPremium: false,
    isBookmark: true,
    iconUrl: `path`,
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    description: `Foo. Bar.`,
    allImages: [`path`, `path`],
    goods: [`Foo`, `Bar`],
    host: {
      avatar: `path`,
      name: `Carry`,
      isPro: false,
    },
    bedrooms: 3,
    adults: 2,
  }
];

const mockStore = configureStore([]);

it(`Should render Favorite screen`, () => {
  const store = mockStore({
    USER: {
      user: {
        email: `path`,
        name: `Carry`,
      }
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <FavoriteScreen getFavoritePlaces={() => {}} favoritePlaces={places}/>
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
