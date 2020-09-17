import React from "react";
import {Image, StyleSheet, Dimensions} from "react-native";
import {Text, TouchableRipple} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {IMAGE_URI} from "../../constants/tmdbConfig";

const MovieCover = ({uri, movie}) => {
    const navigation = useNavigation();

    const {width, height} = Dimensions.get("window");
    return (
        <TouchableRipple
            onPress={() =>
                navigation.navigate("Movie", {
                    movie,
                })
            }
            rippleColor="rgba(0, 0, 0, .32)"
        >
            <Image
                style={{
                    width: width / 2.7,
                    height: height / 3.7,
                    borderRadius: 15,
                    margin: 10,
                }}
                resizeMode={"contain"}
                source={{
                    uri: IMAGE_URI + uri,
                }}
            />
        </TouchableRipple>
    );
};

export default MovieCover;
