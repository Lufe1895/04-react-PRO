import { ChangeEvent, useContext, useRef } from "react"
import { SearchResults } from ".";
import { PlacesContext } from '../context/places/PlacesContext';

export const SearchBar = () => {
    const debounceRef = useRef<NodeJS.Timeout>();
    const { searchPlacesByTerm } = useContext(PlacesContext);

    const onQueryChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(e.target.value);
        }, 350);
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar Lugar..."
                onChange={ onQueryChange }
            />

            <SearchResults />
        </div>
    )
}
