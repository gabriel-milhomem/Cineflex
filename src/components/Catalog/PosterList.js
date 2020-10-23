import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MoviesContext from "../../contexts/MoviesContext";

export default function PosterList() {
    const {movies, filteredMovie} = useContext(MoviesContext);

    return (
        <>
            {movies.map(({id, posterURL}) => (
                <Poster key= {id}>
                    <Link onClick= {() => filteredMovie(id)} to= {`/sessoes`}>
                        <img src= {posterURL}/>

                    </Link>
                </Poster>
            ))}
        </>
    );
}

const Poster = styled.li`
    width: 8.125rem;
    height: 11.25rem;
    border: 0.31rem solid #fff;
    margin: 0px 1.875rem 0.93rem 0px;
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