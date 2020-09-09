import React from "react";
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import {StatusBar} from "expo-status-bar";
import Main from "./Main";
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    useFonts,
} from "@expo-google-fonts/inter";
import {ActivityIndicator} from "react-native-paper";

const store = configureStore();


export default function App() {

    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    return fontsLoaded ?
        <Provider store={store}>
            <StatusBar translucent={false} style="light" hidden={true}/>
            <Main/>
        </Provider> : <ActivityIndicator/>
    ;
}
