export default function Timespan(props){

    let string = `${props.timespan[0]}-${props.timespan[1]}`
    if (props.timespan[1] === null){
        string = props.timespan[0];
    }

    return (
        <p>{string}</p>
    );
}