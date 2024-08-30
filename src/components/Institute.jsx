import institutes from "../assets/institutes.json";
import {Tooltip} from "react-tooltip";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    max-width: 2vw;
    vertical-align: bottom;
    border-radius: 5px;
`;

export default function Institute(props){
    return (
        <>
            <p>Institute: <StyledImage data-tooltip-id="institute" data-tooltip-content={institutes[props.institute]["name"]}
                                       src={institutes[props.institute]["image"]}
                                       alt={institutes[props.institute]["name"]}/></p>
            <Tooltip id="institute"/>
        </>
    );
}

Institute.propTypes = {
    institute: PropTypes.string.isRequired
}