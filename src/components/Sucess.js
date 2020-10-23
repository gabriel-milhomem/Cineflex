import React, { useContext } from "react";
import styled from "styled-components";

import { Title, Button } from "../styled/styles";
import { Link } from "react-router-dom";
import MoviesContext from "../contexts/MoviesContext";

export default function Sucess() {
    const {userChoice} = useContext(MoviesContext);
    const {title, days} = userChoice;

    return (
        <main>
            <Title color= {"#8dd76f"}> Peido feito <br /> com sucesso </Title>

            <Description>
                    <h1> {title} </h1>
                    <h2> <span> {days.date} </span> <time> {days.showtimes.name} </time> </h2>

            </Description>

            <ContainerNameSeats>
                {days.showtimes.seats.map(s => {
                    if(s.selected === true) {
                        return (
                            <li key= {s.id}> Assento {s.name} </li>
                        )
                    }
                })}

            </ContainerNameSeats>

            <Link to= "/">
                <Button width= {"11.56rem"} height= {"2.18rem"} margin= {"10px auto 30px auto"}> Home </Button>

            </Link>
            
        </main>
    );
}

const Description = styled.div`
    font-weight: 600;
    font-size: 1.25rem;
    width: 17.5rem;
    margin: 0 auto 1.875rem auto;

    h1 {
        margin-bottom: 0.5rem;
    }
`;

const ContainerNameSeats = styled.ul`
    margin: 0 auto;
    width: 17.5rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    li {
        margin: 0px 0.5rem 0.5rem 0px;
    }
`;