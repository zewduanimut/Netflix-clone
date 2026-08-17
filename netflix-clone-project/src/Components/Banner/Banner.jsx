import React, { useEffect, useState } from 'react'
import Axios from "../../utls/Axios";
import Requests from "../../utls/Requests";
import "./Banner.css"
function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const request = await Axios.get(Requests.fetchNetflixOriginals);
                console.log("display dat", request.data.results);
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
    return (
        <div>
            <div
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: movie?.backdrop_path ? ` url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
                        : "none",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                <div className='banner-containers'>
                    <h3 className='banner-title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h3>
                    <div className='banner-buttons'>
                        <button className='banner-button play'>Play</button>
                        <button className='banner-button'>My List</button>
                    </div>
                    {/* <h1 className='banner-discription'>{trancate(movie?.overview, 150)}</h1> */}

                </div>
                <div className=''></div>

            </div>
        </div>
    )
}

export default Banner