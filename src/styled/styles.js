import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    margin: 30px 0px;
`;

export const Button =  styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #E8833A;
    text-align: ${props => props.align};
    margin: ${props => props.margin};
`;

export const Main = styled.main`
    height: calc(100vh - 170px);
    overflow-y: scroll;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 100px;
    left: 0px;
    background: #DFE6ED;
    display: flex;
    align-items: center;
    padding: 15px;
    z-index: 1;
    border-top: 1px solid #c3cfd9;
    font-size: 18px;

    img {
        width: 60px;
        height: 80px;
        border: 5px solid #fff;
        border-radius: 10px;
        margin-right: 10px;
    }

    h1 {
        margin-bottom: 10px;
    }
`;