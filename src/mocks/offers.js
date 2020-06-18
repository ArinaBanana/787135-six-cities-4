import {getRandomArrayItem} from "../utils/func";

const COUNT_PLACES = 312;
const COUNT_SHOWED_PLACES = 4;

const titles = [
  `Beautiful camp, luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const prices = [80, 120, 132, 180];

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
  };
};

const generatePlaces = () => {
  return new Array(COUNT_SHOWED_PLACES)
    .fill(null)
    .map(generatePlace);
};

export {COUNT_PLACES, generatePlaces};
