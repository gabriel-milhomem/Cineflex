import React from "react";
import MoviesContext from "../contexts/MoviesContext";
import { Title, Footer, Main, Button } from "../styled/styles";
import MovieTheater from "./MovieTheater";

export default function Seats() {
    const {userChoice, createSelectedSeats} = React.useContext(MoviesContext);
    const {posterURL, title, days} = userChoice;

    React.useEffect(() => createSelectedSeats(), []);
    
    return(
        <Main>
            <Title> Selecione o(s) Assento(s) </Title>

            <MovieTheater />

            <Button width= {"185px"} height= {"35px"} align= {"center"} margin= {"0px auto 30px auto"}>
                    <span> Reservar assento(s) </span>
            </Button>
                
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
