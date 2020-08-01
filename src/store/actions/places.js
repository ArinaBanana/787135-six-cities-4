const adaptPlaces = (places) => {
  const getArrayCoordinates = (latitude, longitude) => {
    let array = [];
    array.push(latitude, longitude);

    return array;
  };

  return places.map((place) => {
    return {
      id: place.id,
      title: place.title,
      price: place.price,
      img: place[`preview_image`],
      type: place.type,
      coordinates: getArrayCoordinates(place.location.latitude, place.location.longitude),
      zoom: place.zoom,
      rating: `${place.rating}`,
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
  });
};

const ActionType = {
  SET_PLACES: `SET_PLACES`,
};

const ActionCreator = {
  setPlaces(places) {
    return {type: ActionType.SET_PLACES, payload: places};
  }
};

const Operation = {
  setPlaces: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const places = adaptPlaces(response.data);

      dispatch(ActionCreator.setPlaces(places));
    });
  }
};

export {Operation, ActionType, ActionCreator};
