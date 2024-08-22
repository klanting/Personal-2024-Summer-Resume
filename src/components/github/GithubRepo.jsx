
import styled from "styled-components";
import LanguageGraph from "./LanguageGraph.jsx";
import {NavLink} from "react-router-dom";
import ReadMeViewer from "./ReadMeViewer.jsx";
import institutes from "../../assets/institutes.json"
import { Tooltip } from 'react-tooltip'

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: whitesmoke;
`;

const StyledDiv = styled.div`
    width: 70vw;
    
    background-image: linear-gradient(10deg, rgb(20, 20, 20), rgb(30, 30, 30));

    border: 2px solid rgb(100, 100, 100);
    border-radius: 10px;
    padding: 2vw;
    margin: 5% auto;
    cursor: pointer;


    &:hover, &:focus {
        box-shadow: 0 0 40px rgba(0, 57, 228, 1);
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

const StyledImage = styled.img`
    max-width: 2vw;
    border-radius: 5px;
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
    const regex = RegExp(`^(${institutes.join("|")})-[0-9]+-(${terms.join("|")})-.+$`, 'g');

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

    const stripped = stripTitle(props.data.name);
    console.log("valid", stripped.valid)
    if (!stripped.valid){
        return (<></>);
    }

    const {institute, year, term, title} = stripped;

    console.log("vkk", institutes[institute]["image"])

    return(
        <StyledLink to={props.data.html_url} target="_blank">
            <StyledDiv>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{props.data.description}</StyledDescription>

                <p>Institute: <StyledImage data-tooltip-id="institute" data-tooltip-content={institutes[institute]["name"]}
                                           src={institutes[institute]["image"]}
                                           alt={institutes[institute]["name"]}/></p>
                <Tooltip id="institute" />
                <p>Year: {year}</p>
                <p>Term: {term}</p>
                <br/>

                <div style={{display: "flex",flexDirection: "row"}}>
                    <ReadMeViewer name={props.data.full_name} branch={props.data.default_branch}/>
                    <LanguageGraph name={props.data.full_name}/>
                </div>


                <h6>Project Tags</h6>
                <StyledTopicBox>
                    {props.data.topics.map((topic) => <StyledTopic key={topic}>{topic}</StyledTopic>)}
                </StyledTopicBox>

            </StyledDiv>
        </StyledLink>

    );
}