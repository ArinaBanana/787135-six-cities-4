const TILES_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;

const tileLayerOptions = {
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};
const fitBoundsOptions = {padding: [7, 7]};

export {TILES_URL, tileLayerOptions, fitBoundsOptions};
