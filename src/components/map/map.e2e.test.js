import React from "react";
import renderer from "react-test-renderer";
import leaflet from "leaflet";
import Map from "./map";
import {TILES_URL, tileLayerOptions, fitBoundsOptions} from "../../utils/map";

jest.mock(`leaflet`, () => {
  const map = {
    fitBounds: jest.fn()
  };

  return {
    map: jest.fn(() => map),
    tileLayer: jest.fn(),
    latLngBounds: jest.fn(),
    icon: jest.fn(),
    marker: jest.fn()
  };
});

const markers = [
  {
    coordinates: [52.3909553943508, 4.85309666406198],
    iconUrl: `path`
  },
  {
    coordinates: [52.3809553943508, 4.939309666406198],
    iconUrl: `path`
  }
];

const coordinates = [[52.3909553943508, 4.85309666406198], [52.3809553943508, 4.939309666406198]];

describe(`Check Map methods`, () => {
  it(`Should return coordinates of markers`, () => {
    const instance = {
      props: {
        markers
      }
    };
    const result = Map.prototype._getCoordinates.call(instance);

    expect(result).toEqual(coordinates);
  });

  it(`Should return leaflet icon with black color. getIconPin`, () => {
    const iconUrl = `black`;
    const opts = {
      iconUrl,
      iconSize: [30, 30]
    };
    leaflet.icon.mockImplementationOnce((options) => {
      return {
        options
      };
    });
    const result = Map.prototype._getIconPin(iconUrl);

    expect(result).toEqual({options: opts});
  });

  it(`Should create map`, () => {
    const element = {};
    const instance = {
      _mapContainerRef: {
        current: element
      },
      props: {
        city: [52.38333, 4.9],
        zoom: 10
      }
    };
    const map = leaflet.map();
    Map.prototype._createMap.call(instance);

    expect(instance._map).toBe(map);
  });

  it(`Should add tile layer`, () => {
    const layer = {
      addTo: jest.fn()
    };

    const map = {};

    leaflet.tileLayer.mockImplementationOnce(() => {
      return layer;
    });

    const instance = {
      _map: map
    };

    Map.prototype._addTileLayer.call(instance);

    expect(leaflet.tileLayer).toHaveBeenCalledWith(TILES_URL, tileLayerOptions);
    expect(layer.addTo).toHaveBeenCalledWith(map);
  });

  it(`Should render marker`, () => {
    const icon = {};
    const map = {};
    const instance = {
      _map: map,
      _getIconPin: jest.fn(() => icon)
    };

    const marker = {
      addTo: jest.fn()
    };

    leaflet.marker.mockImplementationOnce(() => {
      return marker;
    });

    Map.prototype._renderMarker.call(instance, markers[0]);

    expect(leaflet.marker).toHaveBeenCalledWith(markers[0].coordinates, {icon});
    expect(marker.addTo).toHaveBeenCalledWith(map);
  });

  it(`Should render markers`, () => {
    const instance = {
      _renderMarker: jest.fn(),
      props: {
        markers
      }
    };

    Map.prototype._renderMarkers.call(instance);

    expect(instance._renderMarker).toHaveBeenNthCalledWith(1, markers[0]);
    expect(instance._renderMarker).toHaveBeenNthCalledWith(2, markers[1]);

    expect(instance._renderMarker).toHaveBeenCalledTimes(markers.length);
  });

  it(`Should fit bounds`, () => {
    const map = {
      fitBounds: jest.fn()
    };
    const bounds = [346, 856];

    const instance = {
      _map: map,
      _getCoordinates: jest.fn(() => coordinates)
    };

    leaflet.latLngBounds.mockImplementationOnce(() => {
      return bounds;
    });

    Map.prototype._fitBounds.call(instance);

    expect(leaflet.latLngBounds).toHaveBeenCalledWith(coordinates);
    expect(instance._map.fitBounds).toHaveBeenCalledWith(bounds, fitBoundsOptions);
  });

  it(`Should configure map in right order`, () => {
    const executionOrders = [];

    const instance = {
      _createMap: jest.fn(() => executionOrders.push(1)),
      _addTileLayer: jest.fn(() => executionOrders.push(2)),
      _renderMarkers: jest.fn(() => executionOrders.push(3)),
      _fitBounds: jest.fn(() => executionOrders.push(4)),
      props: {
        markers,
      }
    };

    Map.prototype._configureLeafletMap.call(instance);

    expect(executionOrders).toEqual([1, 2, 3, 4]);
  });

  it(`Should configure map on did mount`, () => {
    const spy = jest.spyOn(Map.prototype, `_configureLeafletMap`);
    spy.mockImplementation(() => {});

    const div = {};
    renderer.create(<Map city={[52.38333, 4.9]} zoom={10} markers={markers} height={`600px`} />, {createNodeMock: () => {
      return div;
    }});

    expect(spy).toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });
});
