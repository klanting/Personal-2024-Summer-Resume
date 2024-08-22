import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import styled from "styled-components";
import StyledText from "../styled/StyledText.jsx";

const StyledProfileImage = styled.img`
    max-width: 30%;
    margin: 3vw auto;
    display: block;
    
    border-radius: 10px;
    
`;


export default function Home() {

    return (
        <>
            <Header title={"Homepage"}/>
            <Nav/>

            <StyledProfileImage id="profile-picture" src="/pictures/resume-picture.jpg" alt="Tibo Verreycken"/>

            <StyledText>
                Hi, I am <strong>Tibo Verreycken</strong>, currently a computer science student at the University of
                Antwerp (Belgium).
                At my university I also participate in the Honours Programme Science.
            </StyledText>

        </>
    );
}