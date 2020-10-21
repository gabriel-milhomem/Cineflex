import React from "react";
import styled from "styled-components";
import { Button } from "../styled/styles";

export default function SessionDays(props) {
    const {days} = props;

    return (
        <ContainerLi>
            {days.map(({id, weekday, date, showtimes}) => (
                <li key= {id}>
                    <h2> <span> {`${weekday} `} </span> - <time> {` ${date}`} </time> </h2>

                    <div>
                        {showtimes.map(({id, name}) => (
                            <Button key= {id} height= {40} width= {70}>
                                <time> {name} </time> 
                            </Button>
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

