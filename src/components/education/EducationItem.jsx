
export default function EducationItem(props){

    return (
        <li>
            {props.data.title}
            {props.data.timespan[0]}-{props.data.timespan[1]}
            {props.data.institute}
        </li>
    );
}