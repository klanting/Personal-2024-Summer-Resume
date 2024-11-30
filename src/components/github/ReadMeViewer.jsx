import useSWR from "swr";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import PropTypes from "prop-types";

const StyledP = styled.p`
    border: 2px solid rgb(100, 100, 100);
    border-radius: 10px;
    padding: 1vw;
    
    font-size: calc(2px + 0.4vw);

    white-space: pre-wrap;
    margin: 3% 0;
    
    overflow: scroll;
    overflow-x: hidden;

    scrollbar-color: rgb(100, 100, 100) transparent;
    scrollbar-width: thin;
    
    box-shadow: 0 0 3vmin inset rgb(100, 100, 100);

    max-height: 18vw;
    width: 20vw;
`;

export default function ReadMeViewer(props){
    /*
    * This component uses a markdown renderer to render the ReadMe Page
    * */

    const fetcher = url => fetch(url).then(r => r.text());

    /*
    * ReadMe Data
    * */
    const readme = useSWR(`https://raw.githubusercontent.com/${props.name}/${props.branch}/README.md`, fetcher);
    let data = readme.data;

    if (data === undefined){
        return (<p></p>);
    }

    /*Find all the images in the readme*/
    const imageRegex = RegExp(`!\\[.*\\]\\(.*\\)`, 'g');
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
        const requiredPath = requiredImage.slice(requiredImage.indexOf('(')+1, requiredImage.indexOf(')'));

        /*
        * don't replace external images
        * */
        if (requiredPath.startsWith("http")){
            continue
        }

        const imageAccessPath = `https://raw.githubusercontent.com/${props.name}/${props.branch}/${requiredPath}`;

        /*
        * replace the original URL with the API URL
        * */
        data = data.replaceAll(requiredPath, imageAccessPath)
    }

    return(
        <div>
            <h6>ReadMe:</h6>
            <StyledP>
                <Markdown skipHtml={true} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{data}</Markdown>
            </StyledP>
        </div>
    );
}

ReadMeViewer.propTypes = {
    name: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired
}