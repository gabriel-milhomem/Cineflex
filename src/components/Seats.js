import React from "react";
import MoviesContext from "../contexts/MoviesContext";
import { Title, Footer, Main } from "../styled/styles";

export default function Seats() {
    const {userChoice} = React.useContext(MoviesContext);
    const {posterURL, title, days} = userChoice;

    return(
        <Main>
            <Title> Selecione o Horário </Title>           

            <Footer> 
                <img src= {posterURL} />

                <div>
                    <h1> {title} </h1>
                    <h2> <span>{days.weekday} </span> {" - "} <time>  {days.showtimes.name} </time> </h2>
                </div>
            </Footer>
        </Main>
    );
}