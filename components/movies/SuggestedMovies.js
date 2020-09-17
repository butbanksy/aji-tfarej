import React, {useState, useEffect} from "react";
import {Image, StyleSheet, ScrollView, View} from "react-native";
import {Text, ActivityIndicator} from "react-native-paper";
import MovieCover from "./MovieCover";
import {getPopularMovies} from "../../services/movies";

export default function SuggestedMovies(props) {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then((resp) => {
                setTrendingMovies(resp.data.results);
            })
            .catch((reason) => reason.message());
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trending </Text>
            {trendingMovies.length ? (
                <ScrollView
                    horizontal={true}
                    bounces={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {trendingMovies.map((movie) => (
                        <MovieCover key={movie.id} uri={movie.poster_path} movie={movie}/>
                    ))}
                </ScrollView>
            ) : (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {marginTop: 15, width: "100%"},
    text: {
        fontFamily: "Inter_700Bold",
        color: "#868686",
        fontSize: 15,
        marginLeft: 20,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxHeight: "100%",
    },
});
