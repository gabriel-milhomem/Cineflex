import React from "react";
import styled from "styled-components";
import MoviesContext from "../contexts/MoviesContext";
import { Title, Footer, Main, Button } from "../styled/styles";

export default function Seats() {
    const {userChoice} = React.useContext(MoviesContext);
    const {posterURL, title, days} = userChoice;

    console.log(userChoice);
    return(
        <Main>
            <Title> Selecione o(s) Assento(s) </Title>

            <Room>
                {userChoice.days.showtimes.seats.map(({id, name, isAvailable}) => (
                    <div key= {id}>
                        <CircleStatus width= {"19px"} height= {"19px"} borderColor= {"#000"} color= {"#000"}> </CircleStatus>
                        <span> {name} </span>
                    </div>
                ))}
            </Room>

            <ContainerStatus>
                <div>
                    <CircleStatus color= {"#8dd76f"} width= {"30px"} height= {"30px"} borderColor= {"green"}> </CircleStatus> <span> Selecionado </span>
                    <CircleStatus color= {"#c3cfd9"} width= {"30px"} height= {"30px"} borderColor= {"grey"}> </CircleStatus> <span> Disponível </span>
                    <CircleStatus color= {"#fbe192"} width= {"30px"} height= {"30px"} borderColor= {"orange"}> </CircleStatus> <span> Indísponivel </span>
                </div>
            </ContainerStatus>

            <Button width= {"185px"} height= {"35px"} align= {"center"} margin= {"0px auto 30px auto"}>
                    <span> Reservar assento(s) </span>
            </Button>
                
            <Footer> 
                <img src= {posterURL} />
                
                <div>
                    <h1> {title} </h1>
                    <h2> <span>{days.weekday} </span> {" - "} <time>  {days.showtimes.name} </time> </h2>
                </div>
            </Footer>
        </Main>
    );
}

const CircleStatus = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.color};
    border-radius: 100%;
    margin: 5px;
    border: 2px solid ${props => props.borderColor};
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