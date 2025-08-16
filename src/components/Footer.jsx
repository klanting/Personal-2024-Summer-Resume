import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const FooterContainer = styled.footer`
    background: ${(props) => props.theme.background};
    border-top: 1px solid ${(props) => props.theme.border}20;
    padding: 3rem 0 2rem;
    position: relative;
    overflow: hidden;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`;

const FooterLogo = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const FooterDescription = styled.p`
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const SocialLink = styled.a`
    width: 50px;
    height: 50px;
    background: ${(props) => props.theme.headerPrimary}15;
    border: 1px solid ${(props) => props.theme.headerPrimary}30;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.headerPrimary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.theme.headerPrimary};
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px ${(props) => props.theme.headerPrimary}30;
    }
`;

const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent 0%, 
        ${(props) => props.theme.headerPrimary}30 50%, 
        transparent 100%);
    margin: 2rem 0;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Copyright = styled.div`
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;
    font-size: 0.9rem;
`;

const FooterNav = styled.nav`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const FooterNavLink = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem;

    &:hover {
        opacity: 1;
        color: ${(props) => props.theme.headerPrimary};
    }
`;

const BackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, ${(props) => props.theme.headerPrimary}03 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, ${(props) => props.theme.headerSecondary}03 0%, transparent 50%);
    z-index: -1;
`;

export default function Footer({ onNavClick }) {
    const { theme } = useContext(ThemeContext);

    const handleNavClick = (sectionId) => {
        if (onNavClick) {
            onNavClick(sectionId);
        }
    };

    return (
        <FooterContainer theme={theme}>
            <BackgroundDecoration theme={theme} />
            <FooterContent>
                <FooterLogo theme={theme}>
                    Tibo Verreycken
                </FooterLogo>
                
                <FooterDescription theme={theme}>
                    Computer Science student passionate about technology and innovation. 
                    Always eager to learn, create, and contribute to meaningful projects.
                </FooterDescription>
                
                <SocialLinks>
                    <SocialLink 
                        href="https://github.com/klanting" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        theme={theme}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </SocialLink>
                    <SocialLink 
                        href="https://www.linkedin.com/in/tibo-verreycken-459243283"
                        target="_blank" 
                        rel="noopener noreferrer"
                        theme={theme}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </SocialLink>
                </SocialLinks>
                
                <FooterDivider theme={theme} />
                
                <FooterBottom>
                    <Copyright theme={theme}>
                        © 2024 Tibo Verreycken. All rights reserved.
                    </Copyright>
                    
                    <FooterNav>
                        <FooterNavLink 
                            onClick={() => handleNavClick('home')}
                            theme={theme}
                        >
                            Home
                        </FooterNavLink>
                        <FooterNavLink 
                            onClick={() => handleNavClick('about')}
                            theme={theme}
                        >
                            About
                        </FooterNavLink>
                        <FooterNavLink 
                            onClick={() => handleNavClick('education')}
                            theme={theme}
                        >
                            Education
                        </FooterNavLink>
                        <FooterNavLink 
                            onClick={() => handleNavClick('achievements')}
                            theme={theme}
                        >
                            Achievements
                        </FooterNavLink>
                        <FooterNavLink 
                            onClick={() => handleNavClick('projects')}
                            theme={theme}
                        >
                            Projects
                        </FooterNavLink>
                        <FooterNavLink 
                            onClick={() => handleNavClick('contact')}
                            theme={theme}
                        >
                            Contact
                        </FooterNavLink>
                    </FooterNav>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
}