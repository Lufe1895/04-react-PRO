import { BtnMyLocation, MapView, SearchBar } from "../components"
import { ReactLogo } from '../components';

export const HomeScreen = () => {
    return (
        <div>
            <MapView />
            <BtnMyLocation />
            <ReactLogo />
            <SearchBar />
        </div>
    )
}
