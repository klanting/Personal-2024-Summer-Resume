import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
`;

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        ${(props) => props.theme.background} 0%, 
        ${(props) => props.theme.bodySides} 100%);
    z-index: -2;
`;

const BackgroundPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 25% 25%, ${(props) => props.theme.headerPrimary}10 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, ${(props) => props.theme.headerSecondary}10 0%, transparent 50%);
    z-index: -1;
`;

const HeroContent = styled.div`
    max-width: 800px;
    z-index: 1;
`;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto 2rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid ${(props) => props.theme.headerPrimary};
    box-shadow: 0 20px 40px ${(props) => props.theme.headerPrimary}30;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 5%;
    }
`;

const Greeting = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Description = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 2rem;
    opacity: 0.8;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const CTAButton = styled.button`
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px ${(props) => props.theme.headerPrimary}30;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px ${(props) => props.theme.headerPrimary}40;
    }

    &:active {
        transform: translateY(0);
    }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    cursor: pointer;

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
        }
        40% {
            transform: translateX(-50%) translateY(-10px);
        }
        60% {
            transform: translateX(-50%) translateY(-5px);
        }
    }
`;

const ScrollArrow = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid ${(props) => props.theme.headerPrimary};
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
`;

export default function Hero() {
    const { theme } = useContext(ThemeContext);

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeroSection id="home">
            <HeroBackground theme={theme} />
            <BackgroundPattern theme={theme} />
            
            <HeroContent>
                <ProfileImage theme={theme}>
                    <img src="./pictures/resume-picture.jpg" alt="Tibo Verreycken" />
                </ProfileImage>
                
                <Greeting theme={theme}>
                    Hi, I'm Tibo Verreycken
                </Greeting>
                
                <Subtitle theme={theme}>
                    Computer Science Student & Developer
                </Subtitle>
                
                <Description theme={theme}>
                    Currently pursuing Computer Science at the University of Antwerp, Belgium. 
                    I'm passionate about learning new technologies and building innovative solutions. 
                    Part of the Honours Programme Science, always eager to take on new challenges.
                </Description>
                
                <CTAButton theme={theme} onClick={scrollToAbout}>
                    Learn More About Me
                </CTAButton>
            </HeroContent>

            <ScrollIndicator onClick={scrollToAbout}>
                <ScrollArrow theme={theme} />
            </ScrollIndicator>
        </HeroSection>
    );
}
