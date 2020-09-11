import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useTheme, Avatar, TouchableRipple, Text} from "react-native-paper";
import {BASE_URL} from "../constants";
import ProfileBanner from "../components/profile/ProfileBanner";

const Profile = () => {
    const {colors} = useTheme();
    const {width} = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.background,
        },
        secondContainer: {
            backgroundColor: colors.background,
        },
        defaultBackground: {
            backgroundColor: colors.background,
        },
    });

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    return (
        <ProfileBanner/>
        /*<View style={styles.container}>
        </View>*/
    );
};

export default Profile;
