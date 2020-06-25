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

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    func.call(null, ...args);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.call(null, ...savedArgs);
        savedArgs = null;
      }
    }, ms);
  }

  return wrapper;
}

export {getRandomArrayItem, getRandomNumber, getRandomBoolean, throttle};
