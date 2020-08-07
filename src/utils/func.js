import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

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

function splitString(text) {
  const punctuationMarks = /[.!?]/g;
  const textWithFlags = text.replace(punctuationMarks, `$&SPLIT_HERE `);
  const array = textWithFlags.split(/(\w[SPLIT_HERE]+)(\s)/);
  const result = array.filter((item) => item !== ` ` && item !== `SPLIT_HERE` && item !== ``);

  let firstParagraph;
  let secondParagraph;

  const quantity = result.length / 2;

  if (result.length % 2 === 0) {
    firstParagraph = result.slice(0, quantity);
    secondParagraph = result.slice(quantity, result.length);
  } else {
    firstParagraph = result.slice(0, Math.floor(quantity));
    secondParagraph = result.slice(Math.floor(quantity), result.length);
  }

  return {firstParagraph, secondParagraph};
}

function parseDate(dateInISO) {
  const date = parseISO(dateInISO);
  const month = format(date, `MMMM`);
  const year = format(date, `yyyy`);

  return `${month} ${year}`;
}

export {throttle, extend, getFloatNumberInPercent, splitString, parseDate};
