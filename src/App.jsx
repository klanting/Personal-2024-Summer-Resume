import {Route, Routes, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from "./mains/Home.jsx";
import Projects from "./mains/Projects.jsx";
import styled, { createGlobalStyle } from 'styled-components';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import {useState} from "react";

const GeneralStyling = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #050505;
        color: whitesmoke;
        font-size: calc(2px + 2vw);

    }
`;

const WrappedDiv = styled.div`
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #17172e;
`;

function Root(){

    const [title, setTitle] = useState("Home");

    return (
        <WrappedDiv>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/projects/*" element={<Projects/>}/>
            </Routes>
            <br/>
        </WrappedDiv>
    );
}

const router = createBrowserRouter([{path: "*", Component: Root}])

function App() {


    return (
    <>
        <RouterProvider router={router}/>
        <GeneralStyling/>
    </>
    )
}

export default App
