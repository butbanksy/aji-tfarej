import React from "react";
import {StyleSheet, View} from "react-native";
import {Text, Surface, Avatar, Button} from "react-native-paper";
import {useSelector} from "react-redux";

export const Header = () => {

    const {colors} = useSelector((state) => state.theme.colors);
    return (
        <View style={styles.headerContainer}>
            <Avatar.Icon size={40} icon="menu" style={{backgroundColor: colors.background}} onPress={()=>console.log(colors.background)}/>
            <Avatar.Image size={40} source={require("../../assets/travis.jpg")}/>
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
