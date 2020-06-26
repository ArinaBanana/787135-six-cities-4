import {getRandomArrayItem, getRandomNumber, getRandomBoolean} from "../utils/func";

const COUNT_PLACES = 312;
const COUNT_SHOWED_PLACES = 4;

const titles = [
  `Beautiful camp, luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const prices = [80, 120, 132, 180];

const imageSource = [
  `img/apartment-01.jpg`,
  `img/room.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`
];

const types = [
  `Apartment`,
  `Room`,
  `Studio`,
  `Standard`
];

const coordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

const makeIdGenerator = () => {
  let counter = 0;

  return () => {
    return counter++;
  };
};

const getNextId = makeIdGenerator();

const generatePlace = () => {
  return {
    id: getNextId(),
    title: getRandomArrayItem(titles),
    price: getRandomArrayItem(prices),
    img: getRandomArrayItem(imageSource),
    type: getRandomArrayItem(types),
    coordinates: getRandomArrayItem(coordinates),
    rating: `${getRandomNumber(50, 100)}%`,
    isPremium: getRandomBoolean(),
    isBookmark: getRandomBoolean()
  };
};

const generatePlaces = () => {
  return new Array(COUNT_SHOWED_PLACES)
    .fill(null)
    .map(generatePlace);
};

export {COUNT_PLACES, generatePlaces};
