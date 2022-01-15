/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import { Map } from '!mapbox-gl';
import { createContext } from 'react';

interface Props {
    isMapReady:boolean;
    map?:Map;
    setMap:(map:Map) => void;
    getRouteBetweenPoints:(start: [number, number], end: [number, number]) => Promise<void>
}

export const MapContext = createContext({ } as Props);
