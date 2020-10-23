import React from "react";
import { Title, Footer, Main } from "../styled/styles";
import MoviesContext from "../contexts/MoviesContext";
import SessionDays from "./SessionDays";

export default function Sections() {
    const {userChoice, filteredDay} = React.useContext(MoviesContext);
    const {title, posterURL, days, id} = userChoice;

    return(
        <Main>
            <Title color= {"#000"}> Selecione o Horário </Title>
            
            <SessionDays days= {days} filteredDay= {filteredDay}/>

            <Footer> 
                <img src= {posterURL} />
                <h1> {title} </h1>
            </Footer>
        </Main>
    );
}
