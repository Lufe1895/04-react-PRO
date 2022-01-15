/* eslint import/no-webpack-loader-syntax: off */
import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";
// @ts-ignore
import '!mapbox-gl/dist/mapbox-gl.css';
import './index.css';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    )
}
