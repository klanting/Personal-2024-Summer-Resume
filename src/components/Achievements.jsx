import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import achievements from '../assets/achievements.json';

const AchievementsSection = styled.section`
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

const AchievementsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const AchievementCard = styled.div`
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border}20;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px ${(props) => props.theme.headerPrimary}20;
        border-color: ${(props) => props.theme.headerPrimary}40;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    }
`;

const AchievementIcon = styled.div`
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}20, ${(props) => props.theme.headerSecondary}20);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${(props) => props.theme.headerPrimary};
    border: 2px solid ${(props) => props.theme.headerPrimary}30;
`;

const AchievementTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1rem;
`;

const AchievementDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
    margin-bottom: 1.5rem;
`;

const AchievementDate = styled.div`
    font-size: 0.9rem;
    color: ${(props) => props.theme.headerPrimary};
    font-weight: 500;
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.headerPrimary}15;
    border-radius: 20px;
    display: inline-block;
`;

const AchievementImage = styled.img`
    margin-bottom: 1.5rem;
    border-radius: 12px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
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

const getAchievementIcon = (title) => {
    const icons = {
        'Best Student Award': '🏆',
        'Honours Programme': '⭐',
        'Academic Excellence': '📚',
        'Research Project': '🔬',
        'Competition Winner': '🥇',
        'Leadership Award': '👑'
    };
    return icons[title] || '🏅';
};

export default function Achievements() {
    const { theme } = useContext(ThemeContext);

    return (
        <AchievementsSection id="achievements">
            <BackgroundDecoration theme={theme} />
            <SectionContainer>
                <SectionTitle theme={theme}>Achievements & Recognition</SectionTitle>
                
                <AchievementsGrid>
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index} theme={theme}>
                            <AchievementIcon theme={theme}>
                                {getAchievementIcon(achievement.title)}
                            </AchievementIcon>
                            
                            <AchievementTitle>{achievement.title}</AchievementTitle>
                            {achievement.image !== null && <AchievementImage src={import.meta.env.BASE_URL+achievement.image}
                                                                        alt={achievement.title}/>}
                            <AchievementDescription>
                                {achievement.description}
                            </AchievementDescription>
                        </AchievementCard>
                    ))}
                </AchievementsGrid>
            </SectionContainer>
        </AchievementsSection>
    );
}
