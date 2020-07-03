import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapContainerRef = React.createRef();
  }

  _configureLeafletMap() {
    const map = this._createMap();
    this._addTileLayer(map);
    this._renderMapCoordinates(map);
    this._fitBounds(map);
  }

  _getCoordinates() {
    const {markers} = this.props;
    return markers.map((marker) => marker.coordinates);
  }

  _getIconPin(color) {
    return leaflet.icon({
      iconUrl: color,
      iconSize: [30, 30]
    });
  }

  _createMap() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    return leaflet.map(this._mapContainerRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _addTileLayer(map) {
    return leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }

  _renderMapCoordinates(map) {
    const {markers} = this.props;

    markers.forEach((marker) => {
      const icon = this._getIconPin(marker.color);

      leaflet
        .marker(marker.coordinates, {icon})
        .addTo(map);
    });
  }

  _fitBounds(map) {
    const coordinates = this._getCoordinates();
    const bounds = leaflet.latLngBounds(coordinates);
    map.fitBounds(bounds, {padding: [7, 7]});
  }

  componentDidMount() {
    this._configureLeafletMap();
  }

  render() {
    return (
      <div ref={this._mapContainerRef} style={{height: `635px`}} />
    );
  }
}

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string
  }).isRequired).isRequired,
};

export default Map;
