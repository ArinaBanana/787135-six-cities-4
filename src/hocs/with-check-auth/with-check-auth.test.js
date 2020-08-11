import React from "react";
import withCheckAuth from "./with-check-auth";

jest.mock(`react-redux`, () => {
  return {
    connect: () => (Component) => Component
  };
});

function MockComponent() {
  return (
    <div />
  );
}

it(`Check that HOC's the callback is being made`, () => {
  const checkAuth = jest.fn();
  const MockComponentWrapped = withCheckAuth(true)(MockComponent);

  MockComponentWrapped.prototype.componentDidMount.call({
    props: {
      checkAuth
    }
  });

  expect(checkAuth).toHaveBeenCalled();
});
