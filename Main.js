import React, {useEffect} from "react";
import {
    DefaultTheme,
    DarkTheme,
    Provider as PaperProvider,
} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";
import {AppNavigator} from "./navigation/Navigation";
import {useSelector} from "react-redux";
import {switchTheme} from "./theming/theme";

export default function Main() {

    const {colors} = useSelector((state) => state.theme);

    return (
        <PaperProvider theme={colors}>
            <AppNavigator/>
        </PaperProvider>
    );
}
