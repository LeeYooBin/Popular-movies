import axios from "axios";

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=13f2a9b970b1366ea5911d705a1cffd3'
});

export default moviesApi;