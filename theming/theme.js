import {DarkTheme, DefaultTheme} from "react-native-paper"

export const switchTheme = (theme) => {
    return theme === "light" ? defaultTheme : darkTheme
}

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#49A078"
    }
}

export const defaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#49A078"
    }
}
