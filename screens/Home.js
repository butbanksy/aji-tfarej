import React, {useEffect} from "react";
import {Surface, useTheme,} from "react-native-paper";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import {useNavigation} from "@react-navigation/native";
import SuggestedMovie from "../components/movies/SuggestedMovies";
import {revokeToken} from "../redux/actions/authActions";
import axios from "axios";
import {revokeAxiosToken, setAxiosToken} from "../constants/axiosConfig";
import {setUserInfosRequest} from "../redux/actions/userActions";

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

    useEffect(() => {
        setAxiosToken(token);
        axios
            .post("/token")
            .then((resp) => {
                console.log(resp.data);
                dispatch(setUserInfosRequest(resp.data));
            })
            .catch(() => dispatch(revokeToken()));
        return () => {
            revokeAxiosToken();
        };
    }, []);

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
            </ScrollView>
        </View>
    );
}
