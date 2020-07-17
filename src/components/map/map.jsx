import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {TILES_URL, tileLayerOptions, fitBoundsOptions} from "../../utils/map";

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

    if (this.props.markers.length) {
      this._fitBounds();
    }
  }

  _getCoordinates() {
    const {markers} = this.props;
    return markers.map((marker) => marker.coordinates);
  }

  _getIconPin(iconUrl) {
    return leaflet.icon({
      iconUrl,
      iconSize: [30, 30]
    });
  }

  _createMap() {
    const {city, zoom} = this.props;

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

    this._layers = [];

    markers.forEach((marker) => {
      const layer = this._renderMarker(marker);
      this._layers.push(layer);
    });
  }

  _renderMarker(marker) {
    const icon = this._getIconPin(marker.iconUrl);

    return leaflet
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

  componentDidUpdate(prevProps) {
    if (prevProps.city && prevProps.zoom !== this.props.city && this.props.zoom) {
      this._map.setView(this.props.city, this.props.zoom);
      this._layers.forEach((layer) => layer.remove());

      this._renderMarkers();
    }
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
    iconUrl: PropTypes.string.isRequired
  })),
  height: PropTypes.string.isRequired,
  city: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number.isRequired
};

Map.defaultProps = {
  markers: []
};

export default Map;
