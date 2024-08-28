import styled from "styled-components";
import StyledTitle from "../../styled/StyledTitle.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.jsx";

const StyledLi = styled.li`
    list-style-type: none;
    
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 20px;
    margin-bottom: 3%;
    padding: 2vw;
`;

const StyledImage = styled.img`
    max-width: 30%;
    
    display: block;
    margin: 0 auto;
`;

export default function AchievementItem(props){

    const theme = useContext(ThemeContext);

    return (
        <StyledLi theme={theme}>

            <StyledTitle>{props.data.title}</StyledTitle>

            {props.data.image !== null && <StyledImage src={props.data.image} alt={props.data.title}/>}

            <p>{props.data.description}</p>


        </StyledLi>
    );
}