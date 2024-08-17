import useSWR from "swr";
import GithubRepo from "../components/github/GithubRepo.jsx";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";

export default function Projects() {

    const fetcher = url => fetch(url).then(r => r.json());

    const { data, error, isLoading } = useSWR('https://api.github.com/users/klanting/repos', fetcher);
    console.log(data, error, isLoading);
    if (isLoading || error){return <p>Loading</p>}

    return (
        <>
            <Header title={"Projects"}/>
            <Nav/>
            {data.map((elem) =>
                <GithubRepo key={elem.id} data={elem}/>
            )}


        </>
    );
}