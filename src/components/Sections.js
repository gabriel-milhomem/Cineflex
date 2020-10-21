import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Title, Footer } from "../styled/styles";
import MoviesContext from "../contexts/MoviesContext";
import SessionDays from "./SessionDays";

export default function Sections() {
    const { id } = useParams();
    const moviesList = React.useContext(MoviesContext);
    const {posterURL, title, days} = moviesList.find(movie => movie.id === parseInt(id));

    return(
        <Main>
            <Title> Selecione o Horário </Title>
            
            <SessionDays days= {days}/>

            <Footer> 
                <img src= {posterURL} />
                <h1> {title} </h1>
            </Footer>
        </Main>
    );
}

const Main = styled.main`
    height: calc(100vh - 170px);
    overflow-y: scroll;
`;
