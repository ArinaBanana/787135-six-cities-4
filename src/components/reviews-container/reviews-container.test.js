import React from "react";
import renderer from "react-test-renderer";
import ReviewsContainer from "./reviews-container.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const reviews = [
  {
    id: 1,
    username: `Jon`,
    rating: 70,
    message: `message`,
    date: `2020-08-10T11:39:43.926Z`,
    userAvatar: `path`,
    isPro: true,
  }
];

it(`Should render Reviews Container`, () => {
  const store = mockStore({
    REVIEWS: {
      reviews,
      isLockedForm: false,
    },
    USER: {
      authorizationStatus: `AUTH`,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsContainer
          placeId={0}
          reviews={reviews}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
