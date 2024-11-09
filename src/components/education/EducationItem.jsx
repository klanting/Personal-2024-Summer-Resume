
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

const StyledP = styled.p`
    text-align: center;
`;


export default function EducationItem(props){

    /*
    * This component provides an entry of an education record.
    * */

    const theme = useContext(ThemeContext);

    return (
        <StyledLi theme={theme}>
            {/*Provide the title*/}
            <StyledTitle>{props.data.title}</StyledTitle>

            <StyledLabels>

                {/*Provide the start and end year (if exists) of this course/academic accomplishment*/}
                <Timespan timespan={props.data.timespan}/>

                {/*Visualize the institute where this education is done*/}
                <Institute institute={props.data.institute}/>

                {/*Visualize the current status of the progress*/}
                <Status status={props.data.status}/>
            </StyledLabels>

            {/*Provide additional information*/}
            <StyledP dangerouslySetInnerHTML={{__html: props.data.additional}}></StyledP>
        </StyledLi>
    );
}

EducationItem.propTypes = {
    data: PropTypes.object.isRequired
}