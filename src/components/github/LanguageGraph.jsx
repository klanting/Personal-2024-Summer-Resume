import {AgCharts} from "ag-charts-react";
import useSWR from "swr";
import colors from "../../assets/colors.json"
import styled from "styled-components";
import PropTypes from "prop-types";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.jsx";


const StyledDiv = styled.div`
    width: 25%;
    margin: auto;
    aspect-ratio: 1;
`;

export default function LanguageGraph(props){

    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error, isLoading } = useSWR(`https://api.github.com/repos/${props.name}/languages`, fetcher);

    const theme = useContext(ThemeContext);

    if (isLoading || error){return <p>Loading</p>}

    const transformedData = Object.keys(data).map((key) => {return {language: key, value: data[key], color: colors[key].color} })
    let total = 0;
    Object.values(data).forEach(val => {total += val;})



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
            <AgCharts options={options}/>
        </StyledDiv>

    );
}

LanguageGraph.propTypes = {
    name: PropTypes.string.isRequired
}