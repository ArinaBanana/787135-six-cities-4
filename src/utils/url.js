const PLACE = `/place/`;

const getUrlByPlace = (place) => {
  return `${PLACE}${place.id}`;
};

export {PLACE, getUrlByPlace};
