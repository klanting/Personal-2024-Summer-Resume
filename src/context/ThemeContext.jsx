import {createContext, useState} from "react";
import PropTypes from "prop-types";
import themeList from "../assets/themeList.json";
import config from "../assets/config.json"

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){

    /*
    * Set default theme to user preference
    * */
    const [themeMode, setThemeMode] = useState(window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? "darkThemeIndex": "brightThemeIndex");

    function flipThemeMode(){
        setThemeMode(themeMode === "brightThemeIndex" ? "darkThemeIndex": "brightThemeIndex")
    }

    function getFlippedTheme(){

        return themeList[config[themeMode === "brightThemeIndex" ? "darkThemeIndex": "brightThemeIndex"]];
    }

    const index = config[themeMode];
    const theme = themeList[index];

    return (
        <ThemeContext.Provider value={{theme, flipThemeMode, getFlippedTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
