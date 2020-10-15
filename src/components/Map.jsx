import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map({ markerCoordinates }) {
  return (
    <div className="w-1/2 mx-auto place-items-center">
      <ComposableMap>
        <Graticule stroke="#667EEA" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markerCoordinates.map(({ id, coordinates }) => (
          <Marker key={id} coordinates={coordinates}>
            <circle r={5} fill="#667EEA" stroke="#fff" strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
