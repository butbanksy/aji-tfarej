import React from "react";
import {StyleSheet, View} from "react-native";
import {Avatar, TouchableRipple} from "react-native-paper";
import {useSelector} from "react-redux";
import {BASE_URL} from "../../constants";
import {useNavigation} from "@react-navigation/native";

export const Header = () => {
    const navigation = useNavigation();
    const {colors} = useSelector((state) => state.theme.colors);
    const {image} = useSelector((state) => state.user.user);

    return (
        <View style={styles.headerContainer}>
            <Avatar.Icon
                size={40}
                icon="menu"
                style={{backgroundColor: colors.background}}
            />
                <TouchableRipple
                    onPress={() => navigation.navigate("Profile")}
                    rippleColor="rgba(0, 0, 0, .0)"
                >
                    <Avatar.Image size={40} source={{uri: BASE_URL + image}}/>
                </TouchableRipple>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        flexDirection: "row",
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
});
