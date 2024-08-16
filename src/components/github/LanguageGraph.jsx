import {AgCharts} from "ag-charts-react";
import useSWR from "swr";
import colors from "../../assets/colors.json"

export default function LanguageGraph(props){

    const fetcher = url => fetch(url).then(r => r.json());

    const { data, error, isLoading } = useSWR(`https://api.github.com/repos/${props.name}/languages`, fetcher);

    if (isLoading || error){return <p>Loading</p>}
    console.log(data)

    const transformed = Object.keys(data).map((key) => {return {language: key, value: data[key], color: colors[key].color} })

    const options = {
        data: transformed,
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
                fills: Object.keys(transformed).map((key) => transformed[key].color)
            }
        ],
        legend: {
            item: {
                label: {
                    color: "white"
                }
            }
        },
        background: {
            visible: false
        }
    }
    return(
        <>
            <AgCharts options={options}/>
        </>

    );
}