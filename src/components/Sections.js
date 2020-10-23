import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Title, Footer, Main } from "../styled/styles";
import MoviesContext from "../contexts/MoviesContext";
import SessionDays from "./SessionDays";

export default function Sections() {
    const {userChoice, filteredDay} = useContext(MoviesContext);
    const {title, posterURL, days} = userChoice;

    return(
        <Main>
            <Link to= "/">
                <ion-icon name= "arrow-back-circle-outline"> </ion-icon>
            </Link>

            <Title color= {"#f4ebc1"}> Selecione o Horário </Title>
            
            <SessionDays days= {days} filteredDay= {filteredDay}/>

            <Footer> 
                <img src= {posterURL} />
                <h1> {title} </h1>

            </Footer>
        </Main>
    );
}
