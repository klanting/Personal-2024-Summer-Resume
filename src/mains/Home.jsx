import styled from "styled-components";
import StyledText from "../styled/StyledText.jsx";
import Page from "../components/Page.jsx";

const StyledProfileImage = styled.img`
    max-width: 30%;
    margin: 3vw auto;
    display: block;
    
    border-radius: 10px;
    
`;


export default function Home() {

    return (
        <>

        <Page title={"Homepage"}>

            <StyledProfileImage id="profile-picture" src="/pictures/resume-picture.jpg" alt="Tibo Verreycken"/>

            <StyledText>
                Hi, I am <strong>Tibo Verreycken</strong>, currently a computer science student at the University of
                Antwerp (Belgium).
                At my university I also participate in the Honours Programme Science.
            </StyledText>

        </Page>
        </>
    );
}