
import styled from "styled-components";
import LanguageGraph from "./LanguageGraph.jsx";

const StyledDiv = styled.div`
    width: 70vw;
    aspect-ratio: 3/1;
    border-left: 2px solid rgb(0, 57, 228);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vw 1vw;

    margin: 5% auto;

    cursor: pointer;

    &:hover {
        transform: scale(105%);
    }
`;

const StyledTitle = styled.h3`
    text-align: center;
`;

const StyledDescription = styled.p`
    font-size: calc(2px + 1vw);
    margin: 2% 5%;
`;



export default function GithubRepo(props){


    return(
        <StyledDiv>
            <div>
                <StyledTitle>{props.data.name}</StyledTitle>
                <StyledDescription>{props.data.description}</StyledDescription>
            </div>
            <LanguageGraph name={props.data.full_name}/>
        </StyledDiv>
    );
}