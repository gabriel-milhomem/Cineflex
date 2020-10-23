import React, {useState, useEffect} from "react";
import axios from "axios";

const MoviesContext = React.createContext();

export default MoviesContext;

export function MoviesProvider(props) {
    
    const [errorMessage, setErrorMessage] = useState(false);
    const [backup, setBackup] = useState(null);
    const [movies, setMovies] = useState([]);
    const [userChoice, setUserChoice] = useState(null);
    const [newShopping, setNewShopping] = useState(0);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");
        request.then(response => setMovies(response.data));
    }, [newShopping])

    function filteredMovie(id) {
        const movieSelected = movies.find(movie => movie.id === parseInt(id));
        const copyObject = JSON.parse(JSON.stringify(movieSelected))
        setUserChoice(copyObject);
    }

    function backUp() {
        setUserChoice(backup);
        setErrorMessage(false);
    }

    function filteredDay(idDays, idTime) {
        setBackup(JSON.parse(JSON.stringify(userChoice)));

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

    function newBuy() {
        setNewShopping(newShopping + 1);
        setMovies([]);
    }

    function postSeats(seats, event) {
        if (seats.every(s => s.selected === false)) {
            event.preventDefault();
            return;
        }

        const link = "https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many";
        const postIdSeats = {"ids": undefined};
        const seatsSelected = seats.filter(s => s.selected === true);

        postIdSeats.ids = seatsSelected.map(seat => seat.id);
        axios.post(link, postIdSeats);
        setErrorMessage(false);
    }

    const contextValue = {movies, userChoice, errorMessage, backUp, filteredMovie, filteredDay, createSelectedSeats, checkSeat, postSeats, newBuy};

    return (
        <MoviesContext.Provider value= {contextValue}>
            {props.children}

        </MoviesContext.Provider>
    )
}