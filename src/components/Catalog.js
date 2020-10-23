import React, { useContext } from "react";
import styled from "styled-components";

import PosterList from "./PosterList";
import { Title } from "../styled/styles";
import MoviesContext from "../contexts/MoviesContext";

export default function Catalog() {
    const { movies } = useContext(MoviesContext);

    return(
        <StyledCatalog>
            {movies.length === 0 ? 
                <Spinner src= "./images/loading.svg" />:

                <>
                    <Title color= {"#f4ebc1"}> Selecione o filme </Title>

                    <ContainerPost>
                        <PosterList />

                    </ContainerPost>
                </>
            }

        </StyledCatalog>
    );
}
const StyledCatalog = styled.main`
    text-align: center;
`;

const Spinner = styled.img`
    width: 12rem;
    height: 12rem;
`;

const ContainerPost = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
