import {StatusBar} from "expo-status-bar";
import React from "react";
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";
import {AppNavigator} from "./navigation/Navigation";
import {Provider} from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
    },
};

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AppNavigator/>
            </PaperProvider>
        </Provider>
    );
}
