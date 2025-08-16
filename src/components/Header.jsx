import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import ThemeModeButton from './ThemeModeButton.jsx';
import { useState } from 'react';
import ContactItem from "./ContactItem.jsx";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: ${(props) => props.theme.background}dd;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid ${(props) => props.theme.border}20;
    transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    gap: 0.4rem;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.isActive ? props.theme.headerPrimary : props.theme.textColor};
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        color: ${(props) => props.theme.headerPrimary};
        background: ${(props) => props.theme.headerPrimary}10;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${(props) => props.theme.headerPrimary};
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    ${(props) => props.isActive && `
        &::after {
            width: 80%;
        }
    `}
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;

    @media (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled.div`
    display: ${(props) => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.background}dd;
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.border}20;

    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileNavLink = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.isActive ? props.theme.headerPrimary : props.theme.textColor};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem;
    text-align: left;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        color: ${(props) => props.theme.headerPrimary};
        background: ${(props) => props.theme.headerPrimary}10;
    }
`;

export default function Header({ activeSection, onNavClick }) {
    const { theme } = useContext(ThemeContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'projects', label: 'Projects' }
    ];

    const handleNavClick = (sectionId) => {
        onNavClick(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <HeaderContainer theme={theme}>
            <HeaderContent>
                <Logo theme={theme} onClick={() => handleNavClick('home')}>
                    Tibo Verreycken
                </Logo>
                
                <Nav>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.id}
                            isActive={activeSection === item.id}
                            onClick={() => handleNavClick(item.id)}
                            theme={theme}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <ContactItem title={"Github"}/>
                    <ContactItem title={"Linkedin"}/>
                    <ThemeModeButton />
                </Nav>

                <MobileMenuButton 
                    theme={theme}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </MobileMenuButton>
            </HeaderContent>

            <MobileMenu isOpen={isMobileMenuOpen} theme={theme}>
                {navItems.map((item) => (
                    <MobileNavLink
                        key={item.id}
                        isActive={activeSection === item.id}
                        onClick={() => handleNavClick(item.id)}
                        theme={theme}
                    >
                        {item.label}
                    </MobileNavLink>
                ))}
                <div style={{ padding: '1rem' }}>
                    <ThemeModeButton />
                </div>
            </MobileMenu>
        </HeaderContainer>
    );
}