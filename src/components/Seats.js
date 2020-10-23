import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import MoviesContext from "../contexts/MoviesContext";
import { Title, Footer, Main, Button } from "../styled/styles";
import MovieTheater from "./MovieTheater";

export default function Seats() {
    const {userChoice, createSelectedSeats, postSeats, backUp} = useContext(MoviesContext);
    const {posterURL, title, days} = userChoice;

    useEffect(() => createSelectedSeats(), []);

    return(
        <Main>
            <Link onClick = {backUp} to= "/sessoes">
                <ion-icon name= "arrow-back-circle-outline"> </ion-icon>
            </Link>

            <Title color= {"#f4ebc1"}> Selecione o(s) Assento(s) </Title>

            <MovieTheater />

            <Link to= "/sucesso">
                <Button onClick = {() => postSeats(days.showtimes.seats)} width= {"11.56rem"} height= {"2.18rem"} margin= {"0px auto 1.87rem auto"}>
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
