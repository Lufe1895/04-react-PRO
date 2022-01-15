import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from '../../helpers/getUserLocation';
import { searchAPI } from '../../APIs';
import { PlacesResponse, Feature } from '../../interfaces/places';

export interface PlacesState {
    isLoading:boolean,
    userLocation?:[number, number],
    isLoadingPlaces:boolean,
    places:Feature[],
}

const INITIAL_STATE:PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
    children:JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }:Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation().then(res => 
                dispatch({ type: 'setUserLocation', payload: res }));
            
    }, []);

    const searchPlacesByTerm = async(query:string):Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] });
            return [];
        };
        if (!state.userLocation) throw new Error('User ubication not provided');
        
        dispatch({ type:'setLoadingPlaces' });

        const res = await searchAPI.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(','),
            }
        });

        dispatch({ type: 'setPlaces', payload: res.data.features });
        return res.data.features;
    }

    return (
        <PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
            { children }
        </PlacesContext.Provider>
    )
}
