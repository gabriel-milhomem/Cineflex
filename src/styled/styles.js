import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 1.35rem;
    margin: 1.875rem 0px;
    color: ${props => props.color};
    font-weight: 700;
`;

export const Button =  styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #EA5455;
    text-align: ${props => props.align};
    margin: ${props => props.margin};
    cursor: pointer;
`;

export const Main = styled.main`
    height: calc(100vh - 10.625rem);
    overflow-y: scroll;

    ion-icon {
        position: absolute;
        top: 1.25rem;
        right: 1.5rem;
        font-size: 2.25rem;
        z-index: 2;
        color: #fff;
        cursor: pointer;
    }
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 6.25rem;
    left: 0px;
    background: #f4ebc1;
    display: flex;
    align-items: center;
    padding: 0.93rem;
    z-index: 1;
    border-top: 1px solid #c3cfd9;
    font-size: 1.125rem;
    color: #726a95;

    img {
        width: 3.75rem;
        height: 5rem;
        border: 5px solid #fff;
        border-radius: 10px;
        margin-right: 0.625rem;
    }

    h1 {
        font-weight: 600;
        margin-bottom: 0.625rem;
    }
`;