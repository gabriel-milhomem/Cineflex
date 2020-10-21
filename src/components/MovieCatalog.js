import React from "react";
import styled from "styled-components";

export default function MovieCatalog() {
    return(
        <Main >
            <h2> Selecione o filme </h2>

             <MovieList >
                 <li> </li>
                 <li> </li>
                 <li> </li>
                 <li> </li>
                 <li> </li>
             </MovieList>
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
`;

const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    
    li {
        width: 130px;
        height: 180px;
        padding: 5px;
        margin: 0px 25px 15px 0px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

        img {
            width: 100%;
            height: 100%;
        }

        &:nth-child(2n) {
            margin-right: 0px;
        }
    }
`;