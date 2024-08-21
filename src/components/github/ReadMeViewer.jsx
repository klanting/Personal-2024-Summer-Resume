import useSWR from "swr";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'

const StyledP = styled.p`
    border: 2px solid rgb(100, 100, 100);
    border-radius: 10px;
    padding: 1vw;
    
    font-size: calc(2px + 0.6vw);

    white-space: pre-wrap;
    margin: 3% 0;
    
    overflow: scroll;
    overflow-x: hidden;

    scrollbar-color: rgb(100, 100, 100) transparent;
    scrollbar-width: thin;
    
    box-shadow: 0 0 3vmin inset rgb(100, 100, 100);

    max-height: 18vw;
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
    * Avoid checking double images with the same path
    * */
    requiredImages = Array.from(new Set(requiredImages))

    /*
    * The webpage does not have the images used in the readme directly, but it can request it,
    * so this replace method converts the relative path to the URL
    * */
    for (let i=0; i<requiredImages.length; i++){
        const requiredImage = requiredImages[i];
        console.log("v", requiredImage)
        const requiredPath = requiredImage.slice(requiredImage.indexOf('(')+1, requiredImage.indexOf(')'));
        console.log("p", requiredPath)

        const imageAccessPath = `https://raw.githubusercontent.com/${props.name}/${props.branch}/${requiredPath}`;

        /*
        * replace the original URL with the API URL
        * */
        data = data.replaceAll(requiredPath, imageAccessPath)
    }

    console.log("d", data)

    return(
        <>
            <h6>ReadMe:</h6>
            <StyledP>
                <Markdown remarkPlugins={[remarkGfm, remarkMath, rehypeRaw]} rehypePlugins={[rehypeKatex]}>{data}</Markdown>
            </StyledP>
        </>
    );
}