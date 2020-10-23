import React, { useContext } from "react";
import styled from "styled-components";

import MoviesContext from "../../contexts/MoviesContext";

export default function MovieTheater() {
    const {userChoice, checkSeat, errorMessage} = useContext(MoviesContext);
    const seats = userChoice.days.showtimes.seats;

    return (
        <>  
            {errorMessage ? <Error> Esse assento não esta disponível </Error>: ""}

            <Room>
                {seats.map(({id, name, isAvailable, selected}) => (
                    <div onClick= {() => checkSeat(id, selected, isAvailable)} key= {id}>
                        <CircleStatus 
                            width= {"1.187rem"} 
                            height= {"1.187rem"} 
                            color= {(isAvailable) ? ((selected) ? "#8dd76f": "#6e6d6d") : "#ff8c00"}> 
                        </CircleStatus>
                        <span> {name} </span>

                    </div>
                ))}

            </Room>

            <ContainerStatus>
                <div>
                    <CircleStatus color= {"#8dd76f"} width= {"1.875rem"} height= {"1.875rem"} > </CircleStatus> <span> Selecionado </span>
                    <CircleStatus color= {"#6e6d6d"} width= {"1.875rem"} height= {"1.875rem"} > </CircleStatus> <span> Disponível </span>
                    <CircleStatus color= {"#ff8c00"} width= {"1.875rem"} height= {"1.875rem"} > </CircleStatus> <span> Indísponivel </span>
                </div>

            </ContainerStatus>
        </>
    );
}

const CircleStatus = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.color};
    border-radius: 100%;
    margin: 0.31rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const ContainerStatus = styled.div`
    width: 18.125rem;
    margin: 1.875rem auto;

    & > div {
        width: 10rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    span {
        margin-left: 0.31rem;
    }
`;

const Room = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 18.125rem;
    margin: 0 auto;

    span {
        font-size: 0.75rem;
    }

    & > div {
        margin: 0.31rem 0px;
    }
`;

const Error = styled.p`
    color: red;
    margin-bottom: 0.625rem;
    text-align: center;
    font-weight: 600;
`;