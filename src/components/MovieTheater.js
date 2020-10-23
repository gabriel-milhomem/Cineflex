import React from "react";
import styled from "styled-components";
import MoviesContext from "../contexts/MoviesContext";

export default function MovieTheater() {
    const {userChoice, checkSeat, errorMessage} = React.useContext(MoviesContext);
    const seats = userChoice.days.showtimes.seats;

    return (
        <>  
            {errorMessage ? <Error> Esse assento não esta disponível </Error>: ""}
            <Room>
                {seats.map(({id, name, isAvailable, selected}) => (
                    <div onClick= {() => checkSeat(id, selected, isAvailable)} key= {id}>
                        <CircleStatus 
                            width= {"19px"} 
                            height= {"19px"} 
                            color= {(isAvailable) ? ((selected) ? "#8dd76f": "#c3cfd9") : "#fbe192"}> 
                        </CircleStatus>
                        <span> {name} </span>
                    </div>
                ))}
            </Room>

            <ContainerStatus>
                <div>
                    <CircleStatus color= {"#8dd76f"} width= {"30px"} height= {"30px"} > </CircleStatus> <span> Selecionado </span>
                    <CircleStatus color= {"#c3cfd9"} width= {"30px"} height= {"30px"} > </CircleStatus> <span> Disponível </span>
                    <CircleStatus color= {"#fbe192"} width= {"30px"} height= {"30px"} > </CircleStatus> <span> Indísponivel </span>
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
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const ContainerStatus = styled.div`
    width: 290px;
    margin: 30px auto;

    & > div {
        width: 140px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    span {
        margin-left: 5px;
    }
`;

const Room = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 290px;
    margin: 0 auto;

    span {
        font-size: 12px;
    }

    & > div {
        margin: 5px 0px;
    }
`;

const Error = styled.p`
    color: red;
    margin-bottom: 10px;
    text-align: center;
`;
