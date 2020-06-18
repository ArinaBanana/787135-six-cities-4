const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomNumber(0, array.length);

  return array[randomIndex];
};

const getRandomBoolean = () => {
  return Boolean(getRandomNumber(0, 2));
};

export {getRandomArrayItem, getRandomNumber, getRandomBoolean};
