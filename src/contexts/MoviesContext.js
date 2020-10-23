import React from "react";
import axios from "axios";

const MoviesContext = React.createContext();

export default MoviesContext;

export function MoviesProvider(props) {
    const [movies, setMovies] = React.useState([]);
    const [userChoice, setUserChoice] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(false);

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

    function createSelectedSeats() {
        userChoice.days.showtimes.seats = userChoice.days.showtimes.seats.map(seat => ({...seat, selected: false}));
        setUserChoice({...userChoice});
    }

    function checkSeat(idSeat, isSelected, isAvailable) {
        if(isAvailable === false) {
            setErrorMessage(true);
        }

        else {
            setErrorMessage(false);
            userChoice.days.showtimes.seats = userChoice.days.showtimes.seats.map(seat => {
                if(idSeat === seat.id) {
                    return {...seat, selected: !isSelected};
                }
    
                return seat;
            });
    
            setUserChoice({...userChoice});
        }

    }

    function postSeats(seats) {
        const link = "https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many";
        const postIdSeats = {"ids": undefined};
        const seatsSelected = seats.filter(s => s.selected === true);

        postIdSeats.ids = seatsSelected.map(seat => seat.id);
        console.log("POST", postIdSeats);
        axios.post(link, postIdSeats);
    }

    return (
        <MoviesContext.Provider value= {{movies, userChoice, errorMessage, filteredMovie, filteredDay, createSelectedSeats, checkSeat, postSeats}}>
            {props.children}
        </MoviesContext.Provider>
    )
}