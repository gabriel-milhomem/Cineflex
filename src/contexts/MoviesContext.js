import React from "react";
import axios from "axios";

const MoviesContext = React.createContext();

export default MoviesContext;

export function MoviesProvider(props) {
    const [movies, setMovies] = React.useState([]);
    const [userChoice, setUserChoice] = React.useState(null);

    React.useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        request.then(response => setMovies(response.data));
    }, [])

    function filteredMovie(id) {
        const selected = movies.find(movie => movie.id === parseInt(id));
        setUserChoice(selected);
    }

    function filteredDay(idDays, idTime) {
        userChoice.days = userChoice.days.find(day => day.id === idDays);
        userChoice.days.showtimes = userChoice.days.showtimes.find(time => time.id === idTime);
        setUserChoice({...userChoice});
    }

    return (
        <MoviesContext.Provider value= {{movies, userChoice, filteredMovie, filteredDay}}>
            {props.children}
        </MoviesContext.Provider>
    )
}