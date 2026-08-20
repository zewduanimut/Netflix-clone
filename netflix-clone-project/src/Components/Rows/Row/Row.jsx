

import React, { useEffect, useState } from 'react';
import Axios from '../../../utils/Axios';
import "./Row.css";
import movieTrailer from "movie-trailer"
import ReactYouTube from "react-youtube"
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await Axios.get(fetchUrl);
                console.log(request);
                setMovies(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })();
    }, []);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    console.log(urlParams.get('v'));
                    setTrailerUrl(urlParams.get('v'));
                });
        }
    };
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies?.map((movie, index) => {
                    // Decide whether to show large poster or backdrop image
                    const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;

                    // Render img tag only if imagePath exists
                    return (
                        imagePath && (
                            <img
                                onClick={() => { handleClick(movie) }}
                                key={movie.id || index}
                                className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                                src={` ${base_url}${imagePath}`}
                                alt={movie.name || movie.title || movie.original_name}
                            />
                        )
                    );
                })}
            </div>
            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

            </div>
        </div>
    );
}

export default Row;