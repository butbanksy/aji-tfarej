import React from "react";
import {Image, StyleSheet, ScrollView, View} from "react-native";
import {Text} from "react-native-paper";
import MovieCover from "./MovieCover";

export default function SuggestedMovies(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Suggested</Text>
            <ScrollView
                horizontal={true}
                bounces={true}
                showsHorizontalScrollIndicator={false}
            >
                <MovieCover
                    uri="https://www.joblo.com/assets/images/joblo/posters/2019/05/beats_vertical-main_rgb_pre.jpg"/>
                <MovieCover uri="https://www.joblo.com/assets/images/joblo/posters/2019/10/trick-2019-poster.jpg"/>
                <MovieCover
                    uri="https://centaur-wp.s3.eu-central-1.amazonaws.com/creativereview/prod/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"/>
                <MovieCover uri="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/2018-bestposters-proudmary-700x1038.jpg"/>
                <MovieCover uri="https://www.indiewire.com/wp-content/uploads/2018/12/red_sparrow.jpg?w=510"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {marginTop: 15},
    text: {
        fontFamily: "Inter_700Bold",
        color: "#868686",
        fontSize: 15,
        marginLeft: 20,
    },
});
