import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    width: 90%;
    margin: 0 auto;
    list-style-type: none;
    
    padding: 0;
    
    margin-bottom: 2vh;
`;

const StyledListItem = styled.li`
    text-align: center;
    
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    width: 100%;

    background-image: linear-gradient(to right, rgb(45, 78, 198), rgb(0, 57, 228));
    border-radius: 2vw;
    
    padding: 1vw 3vw;
    
    
    color: whitesmoke;
`;

export default function Nav(){
    return(
        <nav>
            <StyledUl>
                <StyledListItem>
                    <StyledNavLink to="/">Home</StyledNavLink>

                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/projects/">Projects</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/education/">Education</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/achievements/">Achievements</StyledNavLink>
                </StyledListItem>
            </StyledUl>
        </nav>
    );
}