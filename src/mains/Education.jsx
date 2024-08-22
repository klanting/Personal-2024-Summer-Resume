import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import education from "../assets/education.json";
import EducationItem from "../components/education/EducationItem.jsx";
export default function Education() {

    return (
        <>
            <Header title={"Education"}/>
            <Nav/>
            <br/>
            <ul>
                {education.map((elem) => <EducationItem key={elem.title} data={elem}/>)}
            </ul>
        </>
    );
}