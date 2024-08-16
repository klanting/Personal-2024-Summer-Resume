import useSWR from "swr";
import styled from "styled-components";


const StyledTitle = styled.h3`
    text-align: center;
`;

const StyledDescription = styled.p`
    font-size: calc(2px + 1vw);
`;

const StyledDiv = styled.div`
    width: 70vw;
    aspect-ratio: 3/1;
    border: 2px solid whitesmoke;
`;

export default function GithubRepo(props){



    const fetcher = url => fetch(url).then(r => r.json());

    const { data, error, isLoading } = useSWR('https://api.github.com/repos/klanting/BU-2024-Summer-CS391-Show-Tell/languages', fetcher);

    if (isLoading || error){return <p>Loading</p>}
    console.log(data)
    return(
        <StyledDiv>
            <StyledTitle>{props.data.name}</StyledTitle>
            <StyledDescription>{props.data.description}</StyledDescription>
            <p>{Object.keys(data).map((key) => <p key={key}>{key} {data[key]}</p>)}</p>
        </StyledDiv>
    );
}