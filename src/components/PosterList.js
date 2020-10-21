import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MoviesContext from "../contexts/MoviesContext";

export default function PosterList() {
    const moviesList = React.useContext(MoviesContext);

    return (
        <>
            {moviesList.map(movie => (
                <Poster key= {movie.id}>
                    <Link to= {`/sessoes/${movie.id}`}>
                        <img src= {movie.posterURL}/>
                    </Link>
                </Poster>
            ))}
        </>
    );
}

const Poster = styled.li`
    width: 130px;
    height: 180px;
    padding: 5px;
    margin: 0px 30px 15px 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    &:nth-child(2n) {
        margin-right: 0px;
    }
`;