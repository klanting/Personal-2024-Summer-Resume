import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #200f2c;
    text-align: center;
    font-size: calc(2px + 2.5vw);
    padding: 1vh 1vw;
`;

export default function Header(props){
    return(
        <StyledDiv>
            <h1>{props.title}</h1>
        </StyledDiv>
    );
 }