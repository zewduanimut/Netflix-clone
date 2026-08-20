import axios from 'axios';

/** to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    // /discover/tv ? api_key = 70e8d2558b578e2e15de14cbf94a82a7& with_networs=213
});

export default instance;