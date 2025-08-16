import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import education from '../assets/education.json';
import institutes from '../assets/institutes.json';

const EducationSection = styled.section`
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

const Timeline = styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
        transform: translateX(-50%);

        @media (max-width: 768px) {
            left: 20px;
        }
    }
`;

const TimelineItem = styled.div`
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;

    &:nth-child(odd) {
        flex-direction: row;

        @media (max-width: 768px) {
            flex-direction: row;
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;

        @media (max-width: 768px) {
            flex-direction: row;
        }
    }
`;

const TimelineContent = styled.div`
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border}20;
    border-radius: 16px;
    padding: 1.5rem;
    width: 45%;
    position: relative;
    box-shadow: 0 10px 30px ${(props) => props.theme.headerPrimary}10;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px ${(props) => props.theme.headerPrimary}20;
        border-color: ${(props) => props.theme.headerPrimary}40;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        transform: translateY(-50%);
    }

    ${(props) => !props.isEven ? `
        &::before {
            right: -16px;
            border-left-color: ${props.theme.background};
        }
    ` : `
        &::before {
            left: -16px;
            border-right-color: ${props.theme.background};
        }
    `}

    @media (max-width: 768px) {
        width: calc(100% - 60px);
        margin-left: 60px;

        &::before {
            left: -16px !important;
            border-right-color: ${(props) => props.theme.background} !important;
            border-left-color: transparent !important;
        }
    }
`;

const TimelineDot = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, ${(props) => props.theme.headerPrimary}, ${(props) => props.theme.headerSecondary});
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid ${(props) => props.theme.background};
    box-shadow: 0 0 0 4px ${(props) => props.theme.headerPrimary}20;
    z-index: 2;

    @media (max-width: 768px) {
        left: 20px;
    }
`;

const EducationTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 0.5rem;
`;

const Institution = styled.div`
    font-size: 1.1rem;
    color: ${(props) => props.theme.headerPrimary};
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const InstitutionLogo = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 4px;
`;

const Period = styled.div`
    font-size: 0.9rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;
    margin-bottom: 1rem;
`;

const StatusBadge = styled.div`
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    background: ${(props) => 
        props.status === 'completed' ? '#10b98120' : 
        props.status === 'in progress' ? '#f59e0b20' : 
        '#6b728020'};
    color: ${(props) => 
        props.status === 'completed' ? '#10b981' : 
        props.status === 'in progress' ? '#f59e0b' : 
        '#6b7280'};
    border: 1px solid ${(props) => 
        props.status === 'completed' ? '#10b98140' : 
        props.status === 'in progress' ? '#f59e0b40' : 
        '#6b728040'};
`;

const Description = styled.div`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${(props) => props.theme.textColor};
    opacity: 0.9;
    margin: 0;

    strong {
        color: ${(props) => props.theme.headerPrimary};
        font-weight: 600;
    }

    br {
        margin-bottom: 0.5rem;
    }
`;

const BackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 80% 80%, ${(props) => props.theme.headerPrimary}05 0%, transparent 50%),
        radial-gradient(circle at 20% 20%, ${(props) => props.theme.headerSecondary}05 0%, transparent 50%);
    z-index: -1;
`;

export default function Education() {
    const { theme } = useContext(ThemeContext);

    const getInstitutionLogo = (institution) => {
        const logos = {
            'UA': './institutes/UA-logo.png',
            'BU': './institutes/BU-logo.png',
            'GIB': './institutes/gib-logo.png',
            'Personal': './institutes/Personal.png'
        };
        return logos[institution] || './institutes/UA-logo.png';
    };

    return (
        <EducationSection id="education">
            <BackgroundDecoration theme={theme} />
            <SectionContainer>
                <SectionTitle theme={theme}>Education</SectionTitle>
                
                <Timeline theme={theme}>
                    {education.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineDot theme={theme} />
                            <TimelineContent 
                                theme={theme} 
                                isEven={index % 2 === 1}
                            >
                            <EducationTitle>{item.title}</EducationTitle>
                            <Institution>
                                <InstitutionLogo 
                                    src={getInstitutionLogo(item.institute)} 
                                    alt={item.institute}
                                />
                                {institutes[item.institute].name}
                            </Institution>
                            <Period>
                                {item.timespan[0]} {item.timespan[1] ? `- ${item.timespan[1]}` : ''}
                            </Period>
                                <StatusBadge status={item.status.tag}>
                                    {item.status.tag === 'completed' ? '✅ Completed' :
                                        item.status.tag === 'in progress' ? '🔄 In Progress' : item.status.tag}
                                    {item.status.additional && ` (${item.status.additional})`}

                                    {item.status.score && <>
                                        <br/>
                                        <br/>
                                        {item.status.score}
                                    </>}
                                </StatusBadge>

                                <Description dangerouslySetInnerHTML={{ __html: item.additional }} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </SectionContainer>
        </EducationSection>
    );
}
