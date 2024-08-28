import Header from "./Header.jsx";
import Nav from "./Nav.jsx";

export default function Page(props){
    return (
        <>
            <Header title={props.title}/>
            <Nav/>
            {props.children}
        </>
    );
}