import React from "react";
import {StyleSheet, View} from "react-native";
import {Searchbar} from "react-native-paper";

export default () => (
    <Searchbar
        placeholder="Search"
        inputStyle={styles.input}
        style={styles.container}
    />
);

const styles = StyleSheet.create({
    input: {fontFamily: "Inter_500Medium", fontSize: 15, paddingLeft: -30},
    container: {
        borderRadius: 10,
        height: 45,
        elevation: 2,

    },
});
