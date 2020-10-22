import React from "react";
import styled from "styled-components";
import { Button } from "../styled/styles";
import { Link } from "react-router-dom";

export default function SessionDays(props) {
    const { days, filteredDay } = props;

    return (
        <ContainerLi>
            {days.map(({id: ID, weekday, date, showtimes}) => (
                <li key= {ID}>
                    <h2> <span> {weekday} </span> {" - "} <time> {date} </time> </h2>

                    <div>
                        {showtimes.map(({id, name}) => (
                            <Link key= {id} to= "/assentos">
                                <Button onClick= {() => filteredDay(ID, id)} height= {"40px"} width= {"70px"} align= {"left"} margin= {"0px 10px 10px 0px"}>
                                    <time> {name} </time> 
                                </Button>
                            </Link>
                        ))}
                    </div>
                </li>
            ))}

        </ContainerLi>
    );
}

const ContainerLi = styled.ul`
    padding-left: 25px;

    li div {
        display: flex;
        margin: 20px 0px;
    }
`;

