import {Route, Routes, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from "./mains/Home.jsx";
import Projects from "./mains/Projects.jsx";
import styled, { createGlobalStyle } from 'styled-components';
import {useContext} from "react";
import Education from "./mains/Education.jsx";
import Achievements from "./mains/Achievements.jsx";
import ThemeContextProvider, {ThemeContext} from "./context/ThemeContext.jsx";
import Credits from "./mains/Credits.jsx";

const GeneralStyling = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.bodySides};
        color: ${(props) => props.theme.textColor};
        font-size: calc(2px + 1.1vw);

    }
`;

const WrappedDiv = styled.div`
    width: 65%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.background};
`;

function Root(){

    const theme = useContext(ThemeContext);

    return (
        <>
            <WrappedDiv theme={theme}>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/projects/" element={<Projects/>}/>
                    <Route path="/education/" element={<Education/>}/>
                    <Route path="/achievements/" element={<Achievements/>}/>
                    <Route path="/credits/" element={<Credits/>}/>
                </Routes>

            </WrappedDiv>

            <GeneralStyling theme={theme}/>
        </>


    );
}

const router = createBrowserRouter([{path: "*", Component: Root}])

function App() {


    return (
    <>
        <ThemeContextProvider>
            <RouterProvider router={router}/>
        </ThemeContextProvider>

    </>
    )
}

export default App
