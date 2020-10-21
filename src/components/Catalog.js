import React from "react";
import styled from "styled-components";
import PosterList from "./PosterList";

export default function Catalog() {
    
    return(
        <Main >
            <h2> Selecione o filme </h2>

             <ul>
                <PosterList />
             </ul>
        </Main>
    );
}

const Main = styled.main`
    padding-top: 30px;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 30px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

