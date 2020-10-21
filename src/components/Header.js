import React from "react";
import styled from "styled-components";

export default function Header() {
    return(
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
    height: 70px;
    background: #c3cfd9;
    text-align: center;
    padding: 20px 0px;
    z-index: 1;

    h1 {
        font-size: 40px;
        color: #e8833a;
    }
`;