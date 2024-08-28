import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledDiv = styled.div`
    background-image: linear-gradient(to right, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    text-align: center;
    font-size: calc(2px + 2.5vw);
    padding: 1vh 1vw;
    margin-bottom: 2vh;
`;

export default function Header(props){

    const theme = useContext(ThemeContext);

    return(
        <StyledDiv theme={theme}>
            <h1>{props.title}</h1>
        </StyledDiv>
    );
 }