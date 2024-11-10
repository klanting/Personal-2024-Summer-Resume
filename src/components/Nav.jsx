import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    width: 90%;
    margin: 0 auto 2vh auto;
    list-style-type: none;
    
    padding: 0;
`;

const StyledListItem = styled.li`
    text-align: center;
    
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    width: 100%;

    background-image: linear-gradient(to right, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    border-radius: 2vw;
    
    padding: 1vw 3vw;

    font-size: calc(2px + 1.5vw);
    
    color: ${(props) => props.theme.textColor};
`;

export default function Nav(){

    const theme = useContext(ThemeContext);

    return(
        <nav>
            <StyledUl>
                <StyledListItem>
                    <StyledNavLink theme={theme} to={`${import.meta.env.BASE_URL}`}>Home</StyledNavLink>

                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink theme={theme} to={`${import.meta.env.BASE_URL}projects/`}>Projects</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink theme={theme} to={`${import.meta.env.BASE_URL}education/`}>Education</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink theme={theme} to={`${import.meta.env.BASE_URL}achievements/`}>Achievements</StyledNavLink>
                </StyledListItem>
            </StyledUl>
        </nav>
    );
}