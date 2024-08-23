
import styled from "styled-components";
import StyledTitle from "../../styled/StyledTitle.jsx";
import Institute from "../Institute.jsx";
import status from "../../assets/status.json"
import Status from "../Status.jsx";
const StyledLi = styled.li`
    list-style-type: none;
    
    border: 2px solid whitesmoke;
    border-radius: 20px;
    margin-bottom: 3%;
    padding: 2vw;
`;


export default function EducationItem(props){

    return (
        <StyledLi>
            <StyledTitle>{props.data.title}</StyledTitle>
            <p>{props.data.timespan[0]}-{props.data.timespan[1]}</p>

            <Institute institute={props.data.institute}/>

            <Status status={props.data.status}/>

            <br/>
            <p dangerouslySetInnerHTML={{__html: props.data.additional}}></p>
        </StyledLi>
    );
}