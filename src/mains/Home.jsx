import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import styled from "styled-components";


const StyledP = styled.p`
    width: 80%;
    margin: 0 auto;
`;


export default function Home() {

    return (
        <>
            <Header title={"Homepage"}/>
            <Nav/>
            <br/>
            <StyledP>blah 1</StyledP>
        </>
    );
}