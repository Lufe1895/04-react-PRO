/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

// @ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibHVmZTE4OTUiLCJhIjoiY2t5ZzExYjhiMTRoaDJ3bGt6M3Z2YWJjdSJ9.H29pJspW06VRxqfJSbNXHg';

if (!navigator.geolocation) {
  alert('Your navigator has not any Geolocation service enabled.');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
