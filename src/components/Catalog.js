import React from "react";
import styled from "styled-components";

import PosterList from "./PosterList";
import { Title } from "../styled/styles";

export default function Catalog() {

    return(
        <main>
            <Title color= {"#f4ebc1"}> Selecione o filme </Title>

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
