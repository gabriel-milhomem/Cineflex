import React from "react";
import styled from "styled-components";
import PosterList from "./PosterList";
import { Title } from "../styled/styles";
import MoviesContext from "../contexts/MoviesContext";

export default function Catalog() {
    const movies = React.useContext(MoviesContext);

    return(
        <main>
            <Title> Selecione o filme </Title>

             <ContainerPost>
                <PosterList />
             </ContainerPost>
        </main>
    );
}

const ContainerPost = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
