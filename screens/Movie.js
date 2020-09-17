import React from "react";
import {View, StyleSheet, Dimensions, Image} from "react-native";
import {Text, useTheme} from "react-native-paper";
import {IMAGE_URI, MOVIE_API_URL} from "../constants/tmdbConfig";
import {StatusBar} from "expo-status-bar";

const Movie = ({route, navigation}) => {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get("window");
    const {movie} = route.params;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        coverImage: {
            width,
            height: height / 3,
        },
        movieInfoContainer: {
            width: width,
            height: height,
            marginTop: -20,
            backgroundColor: colors.background,
            borderRadius: 20,
        },
        posterImage: {
            width: width / 3.07,
            height: width / 2.07,
            marginTop: -40,
            marginLeft: 20,
            borderRadius: 20,
        },
        movieName: {
            fontFamily: "Inter_700Bold",
            fontSize: 24,
            margin: 20,
        },
        movieOverview: {
            margin: 10,
        },
        movieOverviewText: {
            fontFamily: "Inter_500Medium",
            fontSize: 13,
            color: "#818181",
            lineHeight: 19

        },
        movieOverviewTitle:{
            fontFamily: "Inter_800ExtraBold",
            paddingTop: 20,
            paddingBottom: 10,
            fontSize: 19
        }
    });

    return (
        <>
            <StatusBar translucent={true} style="inverted"/>

            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.coverImage}
                        resizeMode="cover"
                        source={{
                            uri: IMAGE_URI + movie.backdrop_path,
                        }}
                    />
                </View>
                <View style={styles.movieInfoContainer}>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        <Image
                            style={styles.posterImage}
                            resizeMode={"contain"}
                            source={{uri: IMAGE_URI + movie.poster_path}}
                        />
                        <View style={{width: width/1.5}}>
                        <Text style={styles.movieName}>{movie.title} </Text>
                        </View>
                    </View>
                    <View style={styles.movieOverview}>
                        <Text style={styles.movieOverviewTitle}>Overview</Text>
                        <Text style={styles.movieOverviewText}>{movie.overview}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Movie;
