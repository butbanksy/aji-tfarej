import {DarkTheme, DefaultTheme} from "react-native-paper"

export const switchTheme = (theme) => {
    return theme === "light" ? defaultTheme : darkTheme
}

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#ff8f56"
    }
}

export const defaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#ff8f56"
    }
}
