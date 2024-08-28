import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledFooter = styled.footer`
    background-image: linear-gradient(to right, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    text-align: center;
    font-size: calc(2px + 2.5vw);
    
    width: 100%;
    
    
`;

export default function Footer(){

    const theme = useContext(ThemeContext);

    return (
        <StyledFooter theme={theme}>
            <p>All Rights reserved by Tibo Verreycken <NavLink
                to="/credits">Credits</NavLink> &copy;</p>
        </StyledFooter>
    );
}