import useSWR from "swr";
import GithubRepo from "../components/github/GithubRepo.jsx";
import Page from "../components/Page.jsx";
import styled from "styled-components";



const StyledRepoList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    
`;

export default function Projects() {

    const fetcher = url => fetch(url).then(r => r.json());

    const { data, error, isLoading } = useSWR('https://api.github.com/users/klanting/repos', fetcher);

    if (isLoading || error){return <p>Loading</p>}


    return (
        <Page title={"Projects"}>
            <StyledRepoList>

                {(data.message && data.message.startsWith("API rate")) ?
                    <p>Due Github API access limit this page cannot be loaded, try it again after an hour</p> :
                    data.map((elem) =>
                        <GithubRepo key={elem.id} data={elem}/>
                    )}

            </StyledRepoList>



        </Page>
    );
}