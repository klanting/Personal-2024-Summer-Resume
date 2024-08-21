
import styled from "styled-components";
import LanguageGraph from "./LanguageGraph.jsx";
import {NavLink} from "react-router-dom";
import ReadMeViewer from "./ReadMeViewer.jsx";


const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: whitesmoke;
`;

const StyledDiv = styled.div`
    width: 70vw;

    border: 2px solid rgb(100, 100, 100);
    background-image: linear-gradient(10deg, rgb(20, 20, 20), rgb(30,30,30));
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vw;

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
    margin: 2% 0;
`;

const StyledTopicBox = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: left;
    flex-wrap: wrap;
`;

const StyledTopic = styled.p`
    display: inline;
    font-size: calc(2px + 0.8vw);
    margin: 2% 0.6%;
    padding: 0.3vw 0.8vw;
    border-radius: 1vw;

    text-align: center;


    background-image: linear-gradient(to right, rgba(45, 78, 198, 0.7), rgba(0, 57, 228, 0.7));
`;


function stripTitle(githubTitle){
    /*
    * Most of my github projects follow as specific format: {institute or 'Personal'}-{year}-{term}-{title}
    * To display these things separately on my page this function is used to retrieve the data correctly
    * */
    const institutes = ["UA", "BU", "Personal"];
    const terms = ["Spring", "Summer", "Fall"];

    /*
    * Use of regex to verify whether the format matches
    * */
    const regex = RegExp(`^(${institutes.join("|")})-[0-9]+-(${terms.join("|")})-[a-zA-Z\\-]+$`, 'g');

    const hasMatch = regex.test(githubTitle);

    /*
    * notify in case of invalid format
    * */
    if (!hasMatch){
        return {valid: false}
    }

    /*
    * If the format matches, fill in the data
    * */
    const splittedTitle = githubTitle.split("-");

    return {
        valid: true,
        institute: splittedTitle[0],
        year: splittedTitle[1],
        term: splittedTitle[2],
        title: splittedTitle.slice(3).join(" ")
    }
}

export default function GithubRepo(props){
    /*
    * This component represents 1 Github repository whose information is being displayed
    * */

    stripTitle(props.data.name);
    return(
        <StyledLink to={props.data.html_url} target="_blank">
            <StyledDiv>
                <div>
                    <StyledTitle>{props.data.name}</StyledTitle>
                    <StyledDescription>{props.data.description}</StyledDescription>

                    <ReadMeViewer name={props.data.full_name} branch={props.data.default_branch}/>

                    <h6>Project Tags</h6>
                    <StyledTopicBox>
                        {props.data.topics.map((topic) => <StyledTopic key={topic}>{topic}</StyledTopic>)}
                    </StyledTopicBox>

                </div>
                <LanguageGraph name={props.data.full_name}/>
            </StyledDiv>
        </StyledLink>

    );
}