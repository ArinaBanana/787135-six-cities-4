import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {DetailedInfoScreen} from "./detailed-info-screen.jsx";
import thunk from "redux-thunk";

const mockApi = {
  get: jest.fn(() => Promise.resolve({
    data: []
  })),
};
const middlewares = [thunk.withExtraArgument(mockApi)];
const mockStore = configureStore(middlewares);

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

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: 4,
    message: `message`,
    date: `2020-08-10T11:39:43.926Z`,
    userAvatar: `path`,
    isPro: true,
  }
];

it(`Should render Detailed Info Screen`, () => {
  const store = mockStore({
    LOCATIONS: {
      currentLocation: `Amsterdam`,
      locations: [`Amsterdam`, `Paris`],
    },
    PLACES: {
      nearPlaces: places,
    },
    REVIEWS: {
      reviews,
      isLockedForm: false,
    },
    USER: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <DetailedInfoScreen
            placeId={7}
            place={places[0]}
            reviews={reviews}
            nearPlaces={places}
            setActiveElement={() => {}}
            getReviews={() => {}}
            getNearPlaces={() => {}}
          />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
