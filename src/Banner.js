import React from "react";
import "./Banner.css";
import requests, { baseurl } from "./request";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchMovie() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * (req.data.results.length - 1))
        ]
      );
    }
    fetchMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseurl}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="Banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
}

export default Banner;
