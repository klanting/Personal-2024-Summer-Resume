import {AgCharts} from "ag-charts-react";
import useSWR from "swr";
import colors from "../../assets/colors.json"
import styled from "styled-components";
import PropTypes from "prop-types";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.jsx";


const StyledDiv = styled.div`
    width: 100%;
    max-width: 300px;
    margin: auto;
    aspect-ratio: 1;
    
    @media (max-width: 768px) {
        max-width: 250px;
    }
`;

export default function LanguageGraph(props){
    /*
    * GitHub Projects have data about which programming languages are used, and their percentage.
    * This component visualizes a donut graph to provide this information
    * */

    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error, isLoading } = useSWR(`https://api.github.com/repos/${props.name}/languages`, fetcher);

    const {theme} = useContext(ThemeContext);

    if (isLoading) {
        return (
            <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                color: theme.textColor,
                opacity: 0.7
            }}>
                Loading language data...
            </div>
        );
    }
    
    if (error || !data) {
        return (
            <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                color: '#6b7280',
                fontSize: '0.9rem'
            }}>
                Language data unavailable
            </div>
        );
    }

    console.log(data);

    const transformedData = Object.keys(data).map((key) => {return {language: key, value: data[key], color: colors[key].color} })
    let total = 0;
    Object.values(data).forEach(val => {total += val;})
    
    // If no language data available, show message
    if (transformedData.length === 0) {
        return (
            <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                color: '#6b7280',
                fontSize: '0.9rem'
            }}>
                No language data available for this repository
            </div>
        );
    }

    /*
    * Donut config
    * */
    const options = {
        data: transformedData,
        series: [
            {
                type: "donut",
                calloutLabelKey: "language",
                angleKey: "value",
                sectorLabelKey: "value",
                calloutLabel: {
                    enabled: false,
                },
                sectorLabel: {
                    enabled: false,
                },
                innerRadiusRatio: 0.7,
                fills: Object.keys(transformedData).map((key) => transformedData[key].color),
                tooltip: {
                    renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
                        return {
                            title,
                            content: `${datum[calloutLabelKey]}: ${(datum[sectorLabelKey]/total*100).toFixed(2)}%`,
                        };
                    },
                }
            }
        ],
        legend: {
            item: {
                label: {
                    color: theme.textColor
                }
            }
        },
        background: {
            visible: false
        }
    }


    return(
        <StyledDiv>
            {/*Visualize Graph*/}
            <AgCharts options={options}/>
        </StyledDiv>

    );
}

LanguageGraph.propTypes = {
    name: PropTypes.string.isRequired
}