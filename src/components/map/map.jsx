import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {CITY as city, ZOOM as zoom, TILES_URL, tileLayerOptions, fitBoundsOptions} from "../../utils/const";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapContainerRef = React.createRef();

    this._renderMarker = this._renderMarker.bind(this);
  }

  _configureLeafletMap() {
    this._createMap();
    this._addTileLayer();
    this._renderMarkers();
    this._fitBounds();
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
    this._map = leaflet.map(this._mapContainerRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _addTileLayer() {
    leaflet
      .tileLayer(TILES_URL, tileLayerOptions)
      .addTo(this._map);
  }

  _renderMarkers() {
    const {markers} = this.props;

    markers.forEach((marker) => this._renderMarker(marker));
  }

  _renderMarker(marker) {
    const icon = this._getIconPin(marker.color);

    leaflet
      .marker(marker.coordinates, {icon})
      .addTo(this._map);
  }

  _fitBounds() {
    const coordinates = this._getCoordinates();
    const bounds = leaflet.latLngBounds(coordinates);
    this._map.fitBounds(bounds, fitBoundsOptions);
  }

  componentDidMount() {
    this._configureLeafletMap();
  }

  render() {
    const {height} = this.props;

    return (
      <div ref={this._mapContainerRef} style={{height}} />
    );
  }
}

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string.isRequired
  })),
  height: PropTypes.string.isRequired
};

Map.defaultProps = {
  markers: [],
};

export default Map;
