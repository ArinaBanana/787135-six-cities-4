const getPlacesWithIconForMap = (places, activePlaceId) => {
  return places.map((it) => {
    const isActiveMarker = it.id === activePlaceId;
    const iconUrl = isActiveMarker ? `/img/pin-active.svg` : `/img/pin.svg`;

    return Object.assign({}, it, {iconUrl, isActiveMarker});
  });
};

export default getPlacesWithIconForMap;
