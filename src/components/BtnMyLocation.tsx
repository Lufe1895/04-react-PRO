import { useContext } from "react"
import { MapContext } from "../context"
import { PlacesContext } from '../context/places/PlacesContext';

export const BtnMyLocation = () => {
    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const onClick = () => {
        if (!isMapReady) throw new Error('Map is not ready.');
        if (!userLocation) throw new Error('User location does not exist.');

        map?.flyTo({
            zoom: 14,
            center: userLocation,
        });
    }

    return (
        <button 
            className="btn btn-primary"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999,
            }}
            onClick={ onClick }
        >
            Mi ubicación
        </button>
    )
}
