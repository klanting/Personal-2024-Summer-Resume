import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    width: 60%;
    margin: 0 auto;
`;

const StyledListItem = styled.li`
    list-style: none;
    border: 5px solid whitesmoke;
    padding: 0.5vw;
    border-radius: 0.7vw;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
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
            </StyledUl>
        </nav>
    );
}