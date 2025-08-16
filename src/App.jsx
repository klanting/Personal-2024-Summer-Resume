import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Footer from "./components/Footer.jsx";

const GeneralStyling = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${(props) => props.theme.bodySides};
        color: ${(props) => props.theme.textColor};
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.background};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.headerPrimary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.headerSecondary};
    }
`;

const AppContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, 
        ${(props) => props.theme.bodySides} 0%, 
        ${(props) => props.theme.background} 100%);
`;

const MainContent = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

function AppContent() {
    const { theme } = useContext(ThemeContext);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'achievements', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 80;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppContainer theme={theme}>
            <GeneralStyling theme={theme} />
            <Header activeSection={activeSection} onNavClick={scrollToSection} />
            
            <MainContent>
                <Hero />
                <About />
                <Education />
                <Achievements />
                <Projects />
            </MainContent>
            
            <Footer onNavClick={scrollToSection} />
        </AppContainer>
    );
}

function App() {
    return (
        <ThemeContextProvider>
            <AppContent />
        </ThemeContextProvider>
    );
}

export default App;
