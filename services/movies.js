import axios from "axios";
import {MOVIE_API_URL, movieApi} from "../constants/tmdbConfig";

export const getPopularMovies = () => {
    return axios.get(movieApi("/movie/popular"));
};
