const adaptPlace = (place) => {
  const getArrayCoordinates = (latitude, longitude) => {
    let array = [];
    array.push(latitude, longitude);

    return array;
  };

  return {
    id: place.id,
    title: place.title,
    price: place.price,
    img: place[`preview_image`],
    type: place.type,
    coordinates: getArrayCoordinates(place.location.latitude, place.location.longitude),
    zoom: place.zoom,
    rating: place.rating,
    isPremium: place[`is_premium`],
    isBookmark: place[`is_favorite`],
    city: {
      name: place.city.name,
      coordinates: getArrayCoordinates(place.city.location.latitude, place.city.location.longitude),
      zoom: place.city.location.zoom,
    },
    description: place.description,
    goods: place.goods,
    allImages: place.images,
    adults: place[`max_adults`],
    host: {
      avatar: place.host[`avatar_url`],
      id: place.host.id,
      isPro: place.host[`is_pro`],
      name: place.host.name
    },
    bedrooms: place.bedrooms
  };
};

const adaptPlaces = (places) => {
  return places.map((place) => adaptPlace(place));
};

const ActionType = {
  SET_PLACES: `SET_PLACES`,
  SET_NEAR_PLACES: `SET_NEAR_PLACES`,
  SET_FAVORITE_PLACES: `SET_FAVORITE_PLACES`,
  UPDATE_PLACE: `UPDATE_PLACE`
};

const ActionCreator = {
  setPlaces(places) {
    return {type: ActionType.SET_PLACES, payload: places};
  },
  setNearPlaces(places) {
    return {type: ActionType.SET_NEAR_PLACES, payload: places};
  },
  setFavoritePlaces(places) {
    return {type: ActionType.SET_FAVORITE_PLACES, payload: places};
  },
  updatePlace(place) {
    return {type: ActionType.UPDATE_PLACE, payload: place};
  }
};

const Operation = {
  loadPlaces: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const places = adaptPlaces(response.data);

      dispatch(ActionCreator.setPlaces(places));
    });
  },

  loadNearPlaces: (placeId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${placeId}/nearby`).then((response) => {
      const places = adaptPlaces(response.data);

      dispatch(ActionCreator.setNearPlaces(places));
    });
  },

  loadFavoritePlaces: () => (dispatch, getState, api) => {
    return api.get(`/favorite`).then((response) => {
      const places = adaptPlaces(response.data);

      dispatch(ActionCreator.setFavoritePlaces(places));
    });
  },

  postFavoritePlace: (placeId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${placeId}/${status}`).then((response) => {
      const place = adaptPlace(response.data);
      dispatch(ActionCreator.updatePlace(place));
    });
  }
};

export {Operation, ActionType, ActionCreator};
