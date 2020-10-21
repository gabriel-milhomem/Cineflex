import React from "react";
import axios from "axios";

const MoviesContext = React.createContext();

export default MoviesContext;

export function MoviesProvider(props) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        request.then(response => setMovies(response.data));
    }, [])

    return (
        <MoviesContext.Provider value= {movies}>
            {props.children}
        </MoviesContext.Provider>
    )
}