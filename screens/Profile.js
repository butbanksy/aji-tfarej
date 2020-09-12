import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "react-native-paper";
import ProfileBanner from "../components/profile/ProfileBanner";
import ListSettings from "../components/profile/ListSettings";

const Profile = () => {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");

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
        profileBanner: {
            width,
            height: height/3,
            backgroundColor: "#49A078",
        },
        listSettings: {
            width,
            paddingLeft: 10,

        }
    });

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.profileBanner}>
                <ProfileBanner/>
            </View>
            <View style={styles.listSettings}>
            <ListSettings/>
            </View>
        </View>
    );
};

export default Profile;
