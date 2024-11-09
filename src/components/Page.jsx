import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
    min-height: 80vh;
`;




export default function Page(props){
    return (
        <>
            <Header title={props.title}/>
            <Nav/>
            <StyledDiv>
                {props.children}
            </StyledDiv>


            <Footer/>
        </>
    );
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}