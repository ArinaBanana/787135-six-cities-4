import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import PlacesContainer from "./places-container.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    }
  },
  {
    id: 9,
    title: `Foo`,
    price: 80,
    img: `path`,
    type: `room`,
    rating: 4,
    isPremium: true,
    isBookmark: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `City`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    }
  }
];

const markers = [
  {
    coordinates: [52.3909553943508, 4.85309666406198],
    iconUrl: `path`
  },
  {
    coordinates: [52.3809553943508, 4.939309666406198],
    iconUrl: `path`
  }
];

const mockStore = configureStore([]);

it(`Should render Places container`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <PlacesContainer
            places={places}
            currentLocation={`Amsterdam`}
            setActiveElement={() => {}}
            city={[52.38333, 4.9]}
            zoom={10}
            markers={markers}
            changeSortType={() => {}}
          />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
