import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import skillsData from '../assets/skills.json';


const AboutSection = styled.section`
    position: relative;
    overflow: hidden;
`;

const SectionContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const AboutContent = styled.div`
    h3 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.textColor};
    }

    p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: ${(props) => props.theme.textColor};
        opacity: 0.9;
        margin-bottom: 1.5rem;
    }
`;

const SkillsContainer = styled.div`
    margin-top: 2rem;
`;

const SkillsTitle = styled.h4`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.textColor};
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
`;

const SkillItem = styled.div`
    background: ${(props) => props.theme.headerPrimary}15;
    border: 1px solid ${(props) => props.theme.headerPrimary}30;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
    }

    i {
        font-size: 3.5rem;
        margin-bottom: 0.8rem;
        display: block;
        color: ${(props) => props.color};
    }

    p {
        font-weight: 600;
        color: ${(props) => props.color};
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${(props) => props.color};
        opacity: 0.7;
    }
`;

const AboutImage = styled.img`
    width: 100%;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px ${(props) => props.theme.headerPrimary}20;
    transition: transform 0.3s ease;
    position: relative;

    &:hover {
        transform: scale(1.02);
    }
`;

const BackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, ${(props) => props.theme.headerPrimary}05 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, ${(props) => props.theme.headerSecondary}05 0%, transparent 50%);
    z-index: -1;
`;

export default function About() {
    const { theme } = useContext(ThemeContext);
    const skills = skillsData;

    return (
        <AboutSection id="about">
            <BackgroundDecoration theme={theme} />
            <SectionContainer>
                <SectionTitle theme={theme}>About Me</SectionTitle>
                
                <AboutGrid>
                    <AboutContent>
                        
                        <h3>Who I Am</h3>
                        <p>
                            I'm a passionate Computer Science student at the University of Antwerp, Belgium, 
                            with a deep interest in software development and emerging technologies. My journey 
                            in tech started with curiosity and has evolved into a commitment to creating 
                            meaningful solutions.
                        </p>
                        
                        <p>
                            As part of the Honours Programme Science, I'm constantly pushing my boundaries 
                            and seeking opportunities to learn from the best. I believe in the power of 
                            technology to solve real-world problems and make a positive impact.
                        </p>

                        <p>
                            When I'm not coding or studying, you can find me exploring new technologies, 
                            contributing to open-source projects, or collaborating with fellow developers 
                            on innovative ideas.
                        </p>

                        <SkillsContainer>
                            <SkillsTitle>Technical Skills</SkillsTitle>
                            <SkillsGrid>
                                {skills.map((skill, index) => (
                                    <SkillItem key={index} theme={theme} color={skill.color}>
                                        <i className={skill.icon}></i>
                                        <p>{skill.name}</p>
                                    </SkillItem>
                                ))}
                            </SkillsGrid>
                        </SkillsContainer>
                    </AboutContent>

                    <AboutImage theme={theme} src="./pictures/overview-image.jpg" alt="snippets of past projects" />
                </AboutGrid>
            </SectionContainer>
        </AboutSection>
    );
}
