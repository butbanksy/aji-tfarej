import React, {useEffect, useState} from "react";
import {
    Button,
    Text,
    Surface,
    useTheme,
    TouchableRipple,
    Avatar,
} from "react-native-paper";
import {StyleSheet, View, Dimensions, ScrollView} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {Header} from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import {useNavigation} from "@react-navigation/native";
import {changeTheme} from "../redux/actions/themeActions";
import SuggestedMovie from "../components/movies/SuggestedMovies";
import {revokeToken} from "../redux/actions/authActions";
import axios from "axios";
import {BASE_API_URL} from "../constants";
import {setAxiosToken} from "../constants/axiosConfig";

export default function Home() {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const {theme} = useSelector((state) => state.theme);
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const {width, height} = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.background,
        },
        search: {
            elevation: 5,
            borderRadius: 10,
            width: width - 50,
            margin: 5,
            marginLeft: 20,
        },
        secondContainer: {
            backgroundColor: colors.background,
        },
        defaultBackground: {
            backgroundColor: colors.background,
        },
    });

    useEffect(() => setAxiosToken(token), []);

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView
                contentContainerStyle={styles.secondContainer}
                showsVerticalScrollIndicator={false}
            >
                <Surface style={[styles.search, styles.defaultBackground]}>
                    <SearchBar/>
                </Surface>
                <Surface style={[styles.defaultBackground, {padding: -20}]}>
                    <SuggestedMovie/>
                </Surface>
                <View style={{flex: 1, alignItems: "center", marginTop: 200}}>
                    <Button
                        mode="contained"
                        compact={true}
                        uppercase={false}
                        style={{width: "50%", margin: 10}}
                        labelStyle={{fontFamily: "Inter_600SemiBold"}}
                        onPress={() => dispatch(changeTheme(theme))}
                    >
                        {theme === "light" ? "Toggle Dark Theme" : "Toggle Light Theme"}
                    </Button>
                    <Button
                        mode="contained"
                        compact={true}
                        uppercase={false}
                        style={{width: "50%", margin: 10}}
                        labelStyle={{fontFamily: "Inter_600SemiBold"}}
                        onPress={() => dispatch(revokeToken())}
                    >
                        Logout
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
