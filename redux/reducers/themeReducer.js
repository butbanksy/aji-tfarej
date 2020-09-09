import {CHANGE_THEME, CHANGE_THEME_DARK, CHANGE_THEME_LIGHT} from "../actions/actionTypes";
import {darkTheme, defaultTheme} from "../../theming/theme";

const initialState = {
    theme: "dark",
    colors: darkTheme
}

const themeReducer = (state= initialState, action) => {
    switch(action.type){
        case CHANGE_THEME_DARK: {
            return {
                theme: "dark",
                colors: darkTheme
            }
        }
        case CHANGE_THEME_LIGHT: {
            return {
                theme: "light",
                colors: defaultTheme
            }
        }
        default: {
            return state
        }
    }
}

export default themeReducer;
