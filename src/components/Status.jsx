import status from "../assets/status.json";
import styled from "styled-components";
import institutes from "../assets/institutes.json";
import {Tooltip} from "react-tooltip";

const StyledImage = styled.img`
    max-width: 2vw;
    vertical-align: bottom;
    border-radius: 5px;
`;

export default function Status(props){
    return(
        <>
            <p>
                Status: <StyledImage data-tooltip-id="status"
                                     data-tooltip-content={`${props.status.tag} ${props.status.additional}`}
                                     src={status[props.status.tag]}
                                     alt={props.status.tag}/>
            </p>
            <Tooltip id="status"/>
        </>
    );
}