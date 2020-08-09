const PLACE = `/place/`;

const getUrlByPlace = (place) => {
  return `${PLACE}${place.id}`;
};

const getUrlByLogin = () => {
  return `/login`;
};

const getUrlByMainRoute = () => {
  return `/`;
};

export {PLACE, getUrlByPlace, getUrlByLogin, getUrlByMainRoute};
