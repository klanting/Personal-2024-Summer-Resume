import styled from "styled-components";
import StyledText from "../styled/StyledText.jsx";
import Page from "../components/Page.jsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledProfileImage = styled.img`
    max-width: 20%;
    margin: 3vw auto;
    display: block;
    
    border-radius: 10px;
    
`;

const StyledBackground = styled.div`
    max-width: 100%;
    min-height: 80vh;
    
    background: linear-gradient(140deg,
    ${(props) => props.theme.backgroundTransparent} 10%,
    ${(props) => props.theme.background}
    ), 
    url("/pictures/overview-image.jpg");
    
    background-size: 100%;
`;


export default function Home() {

    const theme = useContext(ThemeContext);

    return (
        <>

        <StyledBackground theme={theme}>

            <Page title={"Homepage"}>
                <StyledProfileImage id="profile-picture" src="/pictures/resume-picture.jpg" alt="Tibo Verreycken"/>


                <StyledText>
                    Hi, I am <strong>Tibo Verreycken</strong>, currently a computer science student at the University of
                    Antwerp (Belgium).
                    <br/>
                    At my university, I also participate in the Honours Programme Science.
                    <br/>
                    I am very interested in learning new things and gaining new expierences
                </StyledText>

            </Page>
        </StyledBackground>
        </>
    );
}