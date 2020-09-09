import {CHANGE_THEME} from "./actionTypes";
import {CHANGE_THEME_DARK} from "./actionTypes";
import {CHANGE_THEME_LIGHT} from "./actionTypes";

export const changeTheme = (theme) =>
    theme !== "light"
        ? {
            type: CHANGE_THEME_LIGHT,
        }
        : {
            type: CHANGE_THEME_DARK,
        };
