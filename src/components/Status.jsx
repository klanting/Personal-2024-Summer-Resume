import status from "../assets/status.json";
import styled from "styled-components";
import {Tooltip} from "react-tooltip";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    max-width: 2vw;
    vertical-align: bottom;
    border-radius: 5px;
`;

export default function Status(props){
    /*
    * Shows the status information, used to indicate in progress vs completed
    * */
    return(
        <>
            <p>
                Status: <StyledImage data-tooltip-id="status"
                                     data-tooltip-content={`${props.status.tag} ${props.status.additional}`}
                                     src={import.meta.env.BASE_URL+status[props.status.tag]}
                                     alt={props.status.tag}/>
            </p>
            <Tooltip id="status"/>
        </>
    );
}

Status.propTypes = {
    status: PropTypes.object.isRequired
}