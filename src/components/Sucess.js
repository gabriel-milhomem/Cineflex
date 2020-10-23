import React from "react";
import MoviesContext from "../contexts/MoviesContext";
import styled from "styled-components";
import { Title, Button } from "../styled/styles";
import { Link } from "react-router-dom";

export default function Sucess() {
    const {userChoice} = React.useContext(MoviesContext);
    const {title, days} = userChoice;
    return (
        <main>
            <Title color= {"green"}> Peido feito <br /> com sucesso </Title>

            <Description>
                    <h1> {title} </h1>
                    <h2> <span> {days.date} </span> <time>  {days.showtimes.name} </time> </h2>
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
                <Button width= {"185px"} height= {"35px"} margin= {"10px auto 30px auto"}> Home </Button>
            </Link>
            
        </main>
        
    );
}

const Description = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 280px;
    margin: 0 auto 30px auto;

    h1 {
        margin-bottom: 8px;
    }
`;

const ContainerNameSeats = styled.ul`
    margin: 0 auto;
    width: 280px;
    height: 240px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    li {
        margin: 5px;
    }

`;