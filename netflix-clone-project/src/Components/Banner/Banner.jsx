import React, { useEffect, useState } from 'react';
import Axios from "../../utls/Axios";
import Requests from "../../utls/Requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const request = await Axios.get(Requests.fetchNetflixOriginals);
                console.log("display data", request.data.results);
                setMovie(
                    request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log("error", error);
            }
        })();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: movie?.backdrop_path
                    ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
                    : "none",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banne-buttons">
                    <button className="banne-button play">Play</button>
                    <button className="banne-button">My List</button>
                </div>
                <h1 className="banner-description ">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom" />
        </div>
    );
}

export default Banner;