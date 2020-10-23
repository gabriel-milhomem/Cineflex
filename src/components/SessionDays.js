import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../styled/styles";

export default function SessionDays(props) {
    const { days, filteredDay } = props;

    console.log("DAYS", days);

    return (
        <ContainerLi>
            {days.map(({id: ID, weekday, date, showtimes}) => (
                <li key= {ID}>
                    <h2> <span> {weekday} </span> {" - "} <time> {date} </time> </h2>

                    <div>
                        {showtimes.map(({id, name}) => (
                            <Link key= {id} to= "/assentos">
                                <Button onClick= {() => filteredDay(ID, id)} height= {"2.5rem"} width= {"4.375rem"} margin= {"0px 0.625rem 0.625rem 0px"}>
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
    padding-left: 1.56rem;

    li div {
        display: flex;
        margin: 1.25rem 0px;
    }
`;

