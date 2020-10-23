import React from "react";
import styled from "styled-components";

export default function Header() {

    return (
        <StyledHeader>
            <h1> CINEFLIX </h1>

        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 4.375rem;
    background: #EA5455;
    text-align: center;
    padding: 1.25rem 0px;
    z-index: 1;

    h1 {
        font-size: 2.5rem;
        color: #fff;
        font-family: 'Bebas Neue', cursive; 
        cursor: pointer;
    }
`;