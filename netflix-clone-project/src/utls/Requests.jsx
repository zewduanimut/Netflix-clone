const API_KEY = "70e8d2558b578e2e15de14cbf94a82a7";

const requests = {
    fetchTrending: `/trending/all / week ? api_key = ${API_KEY}& language=en - US`,
    fetchNetflixOriginals: `/discover/tv ? api_key = ${API_KEY}& with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated ? api_key = ${API_KEY}& language=en - US`,
    fetchActionMovies: `/discover/movie ? api_key = ${API_KEY}& with_genres=28`,
    fetchComedyMovies: `/discover/movie ? api_key = ${API_KEY}& with_genres=35`,
    fetchHorrorMovies: `/discover/movie ? api_key = ${API_KEY}& with_genres=27`,
    fetchRomanceMovies: `/discover/movie ? api_key = ${API_KEY}& with_genres=10749`,
    fetchDocumentaries: ` /discover/movie ? api_key = ${API_KEY}& with_genres=99`,
    fetchTvShow: ` /tv/popular ? api_key = ${API_KEY}& language=en - US & page=1`
};

export default requests;