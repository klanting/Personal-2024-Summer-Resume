import styled from 'styled-components';
import { useContext, useState, useEffect, useMemo } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import useSWR from 'swr';
import LanguageGraph from './github/LanguageGraph.jsx';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled.div`
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border}20;
    border-radius: 16px;
    padding: 1.5rem;
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

const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    margin: 0;
`;

const ProjectLanguage = styled.span`
    background: ${(props) => props.theme.headerPrimary}20;
    color: ${(props) => props.theme.headerPrimary};
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
`;

const ProjectDescription = styled.p`
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
`;

const ProjectStats = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
`;

const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;

    svg {
        width: 16px;
        height: 16px;
    }
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const ProjectLink = styled.a`
    background: ${(props) => props.theme.headerPrimary}15;
    color: ${(props) => props.theme.headerPrimary};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid ${(props) => props.theme.headerPrimary}30;

    &:hover {
        background: ${(props) => props.theme.headerPrimary};
        color: white;
        transform: translateY(-2px);
    }
`;

const LoadingState = styled.div`
    text-align: center;
    padding: 3rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;
`;

const ErrorState = styled.div`
    text-align: center;
    padding: 3rem;
    color: #ef4444;
    background: #fef2f2;
    border-radius: 12px;
    border: 1px solid #fecaca;
`;

const ProjectAnalysis = styled.div`
    margin-top: 1.5rem;
    padding: 1rem;
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border}20;
    border-radius: 12px;
`;

const AnalysisTitle = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1rem;
    text-align: center;
`;

const PieChartContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const PieChart = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(${(props) => props.gradient});
    margin: 0 auto;
`;

const PieChartCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: ${(props) => props.theme.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
`;

const ChartLegend = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
`;

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
`;

const LegendColor = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.color};
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
`;

const Tag = styled.span`
    background: ${(props) => props.theme.headerPrimary}15;
    color: ${(props) => props.theme.headerPrimary};
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.headerPrimary};
`;

const LanguageGraphContainer = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border}20;
    border-radius: 12px;
    text-align: center;
`;

const GraphTitle = styled.h5`
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1rem;
    text-align: center;
`;

const BackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 70%, ${(props) => props.theme.headerPrimary}05 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, ${(props) => props.theme.headerSecondary}05 0%, transparent 50%);
    z-index: -1;
`;

export default function Projects() {
    const { theme } = useContext(ThemeContext);

    //Cache the data for 5 minutes
    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error, isLoading } = useSWR(
        'https://api.github.com/users/klanting/repos', 
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            dedupingInterval: 300000, // 5 minutes for GitHub API
            focusThrottleInterval: 10000, // 10 seconds
            errorRetryCount: 2,
            errorRetryInterval: 10000, // 10 seconds
            refreshInterval: 600000, // 10 minutes
            refreshWhenHidden: false,
            refreshWhenOffline: false
        }
    );

    // Helper function to create pie chart gradient
    const createPieChart = (data, colors) => {
        if (!data || data.length === 0) return '';
        
        let currentAngle = 0;
        const gradients = data.map((item, index) => {
            const percentage = item.percentage;
            const startAngle = currentAngle;
            currentAngle += (percentage / 100) * 360;
            const endAngle = currentAngle;
            
            return `${colors[index % colors.length]} ${startAngle}deg ${endAngle}deg`;
        });
        
        return gradients.join(', ');
    };

    // Helper function to extract project languages and tags
    const getProjectAnalysis = (repo) => {
        const analysis = {
            languages: [],
            tags: new Set()
        };

        // Add topics as tags
        if (repo.topics && Array.isArray(repo.topics)) {
            repo.topics.forEach(topic => analysis.tags.add(topic));
        }

        return {
            languages: analysis.languages,
            tags: Array.from(analysis.tags).sort()
        };
    };

    if (isLoading) {
        return (
            <ProjectsSection id="projects">
                <SectionContainer>
                    <SectionTitle theme={theme}>Projects</SectionTitle>
                    <LoadingState theme={theme}>
                        <div>Loading projects...</div>
                    </LoadingState>
                </SectionContainer>
            </ProjectsSection>
        );
    }

    if (error || (data && data.message && data.message.startsWith("API rate"))) {
        return (
            <ProjectsSection id="projects">
                <SectionContainer>
                    <SectionTitle theme={theme}>Projects</SectionTitle>
                    <ErrorState>
                        <div>Due to GitHub API rate limits, projects cannot be loaded at the moment.</div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            Please try again later or visit my GitHub profile directly.
                        </div>
                    </ErrorState>
                </SectionContainer>
            </ProjectsSection>
        );
    }

    return (
        <ProjectsSection id="projects">
            <BackgroundDecoration theme={theme} />
            <SectionContainer>
                <SectionTitle theme={theme}>All Projects</SectionTitle>
                
                <ProjectsGrid>
                    {data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).filter(repo => !repo.name.includes('klanting')).map((repo) => (
                        <ProjectCard key={repo.id} theme={theme}>
                            <ProjectHeader>
                                <ProjectTitle>{repo.name}</ProjectTitle>
                            </ProjectHeader>
                            
                            <ProjectDescription>
                                {repo.description || 'No description available'}
                            </ProjectDescription>
                            
                            <ProjectStats>
                                <StatItem>
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    {new Date(repo.updated_at).toLocaleDateString()}
                                </StatItem>
                            </ProjectStats>
                            
                            <ProjectLinks>
                                <ProjectLink 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    theme={theme}
                                >
                                    View Code
                                </ProjectLink>
                                {repo.homepage && (
                                    <ProjectLink 
                                        href={repo.homepage} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        theme={theme}
                                    >
                                        Live Demo
                                    </ProjectLink>
                                )}
                            </ProjectLinks>

                            {/* Project Analysis */}
                            {(() => {
                                const analysis = getProjectAnalysis(repo);
                                return (
                                    <ProjectAnalysis theme={theme}>

                                        {/* Detailed Language Graph */}
                                        <LanguageGraphContainer theme={theme}>
                                            <GraphTitle theme={theme}>
                                                Languages
                                            </GraphTitle>
                                            <LanguageGraph name={`klanting/${repo.name}`} />
                                        </LanguageGraphContainer>

                                        {/* Project Tags */}
                                        {analysis.tags.length > 0 && (
                                            <div>
                                                <AnalysisTitle theme={theme}>
                                                Project Tags
                                                </AnalysisTitle>
                                                <TagsContainer>
                                                    {analysis.tags.map((tag) => (
                                                        <Tag key={tag} theme={theme}>
                                                            {tag}
                                                        </Tag>
                                                    ))}
                                                </TagsContainer>
                                            </div>
                                        )}
                                    </ProjectAnalysis>
                                );
                            })()}
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </SectionContainer>
        </ProjectsSection>
    );
}
