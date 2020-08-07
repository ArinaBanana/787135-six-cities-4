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
    date: `date`,
    userAvatar: `path`,
    isPro: true,
  }
];

it(`Should render Reviews Container`, () => {
  const store = mockStore({
    REVIEWS: {
      reviews
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsContainer reviews={reviews} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
