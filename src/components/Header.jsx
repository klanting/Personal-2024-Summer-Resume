import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";
import PropTypes from "prop-types";
import ThemeModeButton from "./ThemeModeButton.jsx";

const StyledHeader = styled.header`
    background-image: linear-gradient(to right, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    text-align: center;
    font-size: calc(2px + 2.5vw);
    padding: 1vh 1vw;
    margin-bottom: 2vh;
    position: relative;
`;

const StyledButtonCorner = styled.div`
    position: absolute;
    right: 1vw;
    
`;

export default function Header(props){

    const {theme} = useContext(ThemeContext);

    return(
        <StyledHeader theme={theme}>
            <StyledButtonCorner>
                <ThemeModeButton/>
            </StyledButtonCorner>
            <h1>{props.title}</h1>

        </StyledHeader>
    );
 }

 Header.propTypes = {
    title: PropTypes.string.isRequired
 }