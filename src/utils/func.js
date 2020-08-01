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

function extend(a, b) {
  return Object.assign({}, a, b);
}

function getFloatNumberInPercent(a, b = 5) {
  return 100 * a / b;
}

export {throttle, extend, getFloatNumberInPercent};
