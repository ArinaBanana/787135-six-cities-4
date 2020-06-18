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
    rating: `${getRandomNumber(0, 100)}%`,
    premium: getRandomBoolean(),
    isBookmark: getRandomBoolean()
  };
};

const generatePlaces = () => {
  return new Array(COUNT_SHOWED_PLACES)
    .fill(null)
    .map(generatePlace);
};

export {COUNT_PLACES, generatePlaces};
