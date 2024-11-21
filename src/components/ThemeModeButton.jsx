import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 5vw;
    aspect-ratio: 5/2;
    background: linear-gradient(140deg,
    ${(props) => props.theme.headerPrimary},
    ${(props) => props.theme.background}
    );
    
    border: none;
    border-radius: 2vw;
    
`;

export default function ThemeModeButton() {
    const {flipThemeMode, getFlippedTheme} = useContext(ThemeContext);

    return (
        <StyledButton onClick={flipThemeMode} theme={getFlippedTheme()}/>
    );
}