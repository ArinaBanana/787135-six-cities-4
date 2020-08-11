import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCurrentSortType from "./with-current-sort-type";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {changeSortType} = props;

  return (
    <div onClick={changeSortType} />
  );
};

MockComponent.propTypes = {
  changeSortType: PropTypes.func.isRequired
};

const places = [{
  id: 9,
  title: `Foo`,
  price: 80,
  img: `path`,
  type: `room`,
  rating: `80%`,
  isPremium: true,
  isBookmark: true,
  coordinates: [52.3809553943508, 4.939309666406198],
  city: {
    name: `City`,
    coordinates: [52.38333, 4.9],
    zoom: 12
  }
}];

it(`HOC passes the value is hidden`, () => {
  const MockComponentWrapped = withCurrentSortType(MockComponent);
  MockComponentWrapped.prototype.changeSortType = jest.fn();

  const wrapper = mount(<MockComponentWrapped places={places} />);
  wrapper.find(`div`).simulate(`click`);

  expect(MockComponentWrapped.prototype.changeSortType).toHaveBeenCalled();
});

