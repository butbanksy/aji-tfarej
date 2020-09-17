import React from "react";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
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
import axios from "axios";
import {BASE_API_URL} from "./constants";

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

    return fontsLoaded ? (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar translucent={true} style="auto"/>
                <Main/>
            </PersistGate>
        </Provider>
    ) : (
        <ActivityIndicator/>
    );
}
