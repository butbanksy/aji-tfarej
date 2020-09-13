import React from "react";
import {Dimensions, View, StyleSheet} from "react-native";
import {Text, useTheme, TextInput, Avatar} from "react-native-paper";

export default function SignUp() {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 20,
        },
        titleContainer: {
            height: height / 5,
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        title: {
            fontFamily: "Inter_600SemiBold",
            fontSize: 35,
            paddingTop: 30,
        },
        subtitle: {
            fontFamily: "Inter_500Medium",
            fontSize: 23,
            paddingTop: 2,
            color: "#8a8585",
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Sign up to get started!</Text>
                </View>
                <View></View>
            </View>
            <View>
                <TextInput mode="outlined" label="Full Name"/>
                <TextInput mode="outlined" label="Email Address"/>
                <TextInput mode="outlined" label="Password"/>
                <TextInput mode="outlined" label="Confirm Password"/>
                <Text>Upload Avatar</Text>
                <Avatar.Image
                    size={100}
                    source={require("../assets/depositphotos_30256231-stock-photo-cinema-dog.jpg")}
                />
            </View>
        </View>
    );
}
