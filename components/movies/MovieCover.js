import React from "react";
import {Image, StyleSheet, Dimensions} from "react-native";
import {Text, TouchableRipple} from "react-native-paper";

const MovieCover = ({uri}) => {
    const {width, height} = Dimensions.get("window");
    return (
        <TouchableRipple
            onPress={() => console.log("Pressed")}
            rippleColor="rgba(0, 0, 0, .32)"
        >
            <Image
                style={{
                    width: width / 2.7,
                    height: height / 3.7,
                    borderRadius: 5,
                    margin: 10,
                }}
                resizeMode={"contain"}
                source={{
                    uri
                }}
            />
        </TouchableRipple>
    );
};

export default MovieCover;
