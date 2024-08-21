import useSWR from "swr";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const StyledP = styled.p`
    font-size: calc(2px + 1vw);

    white-space: pre-wrap;
`;

export default function ReadMeViewer(props){

    const fetcher = url => fetch(url).then(r => r.text());


    const readme = useSWR(`https://raw.githubusercontent.com/${props.name}/${props.branch}/README.md`, fetcher);

    let data = readme.data;

    const imageRegex = RegExp(`!\\[.*\\]\\(.*\\)`, 'g');

    if (data === undefined){
        return (<p>w</p>);
    }

    let requiredImages = data.match(imageRegex);

    if (requiredImages === null){
        requiredImages = []
    }

    /*
    * Only replace each image once
    * */
    requiredImages = Array(new Set(requiredImages))

    /*
    * The webpage does not have the images used in the readme directly, but it can request it,
    * so this replace method converts the relative path to the URL
    * */
    for (let i=0; i<requiredImages.length; i++){
        const requiredImage = requiredImages[i];
        const requiredPath = requiredImage.slice(requiredImage.indexOf('(')+1, requiredImage.indexOf(')'));
        console.log("p", requiredPath)

        const imageAccessPath = `https://raw.githubusercontent.com/${props.name}/${props.branch}/${requiredPath}`;
        data = data.replace(requiredPath, imageAccessPath)
    }

    console.log("d", data)

    return(
        <>
            <StyledP>
                <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
            </StyledP>
        </>
    );
}