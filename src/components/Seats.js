import React from "react";
import MoviesContext from "../contexts/MoviesContext";
import { Title, Footer, Main, Button } from "../styled/styles";
import MovieTheater from "./MovieTheater";
import { Link } from "react-router-dom";

export default function Seats() {
    const {userChoice, createSelectedSeats, postSeats} = React.useContext(MoviesContext);
    const {posterURL, title, days} = userChoice;

    React.useEffect(() => createSelectedSeats(), []);

    return(
        <Main>
            <Title color= {"#000"}> Selecione o(s) Assento(s) </Title>

            <MovieTheater />

            <Link to= "/sucesso">
                <Button onClick = {() => postSeats(days.showtimes.seats)} width= {"185px"} height= {"35px"} margin= {"0px auto 30px auto"}>
                        <span> Reservar assento(s) </span>
                </Button>
            </Link>

                
            <Footer> 
                <img src= {posterURL} />
                
                <div>
                    <h1> {title} </h1>
                    <h2> <span> {days.weekday} </span> {" - "} <time>  {days.showtimes.name} </time> </h2>
                </div>
            </Footer>
        </Main>
    );
}
