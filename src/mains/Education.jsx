import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import education from "../assets/education.json";
import EducationItem from "../components/education/EducationItem.jsx";
import styled from "styled-components";

const StyledUl = styled.ul`
    padding: 0;
    width: 70%;
    margin: 0 auto;
`;

export default function Education() {

    return (
        <>
            <Header title={"Education"}/>
            <Nav/>
            <br/>
            <StyledUl>
                {education.map((elem) => <EducationItem key={elem.title} data={elem}/>)}
            </StyledUl>
        </>
    );
}