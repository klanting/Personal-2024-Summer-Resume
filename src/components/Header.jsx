import styled from "styled-components";
import {useLocation} from "react-router-dom";

const StyledDiv = styled.div`
    background-image: linear-gradient(to right, rgb(45, 78, 198), rgb(0, 57, 228));
    text-align: center;
    font-size: calc(2px + 2.5vw);
    padding: 1vh 1vw;
    margin-bottom: 2vh;
`;

export default function Header(props){

    return(
        <StyledDiv>
            <h1>{props.title}</h1>
        </StyledDiv>
    );
 }