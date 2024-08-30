import {createContext} from "react";
import PropTypes from "prop-types";
import themeList from "../assets/themeList.json";

export const ThemeContext = createContext();

const theme = themeList[5];

export default function ThemeContextProvider(props){
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}