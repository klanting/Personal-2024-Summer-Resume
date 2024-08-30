
import styled from "styled-components";
import StyledTitle from "../../styled/StyledTitle.jsx";
import Institute from "../Institute.jsx";
import Status from "../Status.jsx";
import Timespan from "../Timespan.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.jsx";
import PropTypes from "prop-types";

const StyledLi = styled.li`
    list-style-type: none;
    
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 20px;
    margin-bottom: 3%;
    padding: 2vw;
`;

const StyledLabels = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 3% 0;
`;


export default function EducationItem(props){

    const theme = useContext(ThemeContext);

    return (
        <StyledLi theme={theme}>
            <StyledTitle>{props.data.title}</StyledTitle>

            <StyledLabels>
                <Timespan timespan={props.data.timespan}/>

                <Institute institute={props.data.institute}/>

                <Status status={props.data.status}/>
            </StyledLabels>

            <p dangerouslySetInnerHTML={{__html: props.data.additional}}></p>
        </StyledLi>
    );
}

EducationItem.propTypes = {
    data: PropTypes.object.isRequired
}