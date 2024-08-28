import {createContext} from "react";

export const ThemeContext = createContext();

const colors = {
    "bodySides": "#050505",
    "background": "#17172e",
    "headerPrimary": "rgb(45, 78, 198)",
    "headerSecondary": "rgb(0, 57, 228)",
    "border": "whitesmoke",
    "projectsBackgroundPrimary": "rgb(20, 20, 20)",
    "projectsBackgroundSecondary": "rgb(30, 30, 30)",
    "projectsBorder": "rgb(100, 100, 100)",
    "projectGlow": "rgba(0, 57, 228, 1)",
    "projectTopicPrimary": "rgba(45, 78, 198, 0.7)",
    "projectTopicSecondary": "rgba(0, 57, 228, 0.7)",
    "textColor": "whitesmoke"
}

export default function ThemeContextProvider(props){
    return (
        <ThemeContext.Provider value={colors}>
            {props.children}
        </ThemeContext.Provider>
    );
}