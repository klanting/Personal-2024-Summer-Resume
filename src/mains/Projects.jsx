import useSWR from "swr";
import GithubRepo from "../components/github/GithubRepo.jsx";
import Page from "../components/Page.jsx";

export default function Projects() {

    const fetcher = url => fetch(url).then(r => r.json());

    const { data, error, isLoading } = useSWR('https://api.github.com/users/klanting/repos', fetcher);
    console.log(data, error, isLoading);
    if (isLoading || error){return <p>Loading</p>}

    return (
        <Page title={"Projects"}>
            {data.map((elem) =>
                <GithubRepo key={elem.id} data={elem}/>
            )}


        </Page>
    );
}