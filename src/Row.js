import React from "react";
import axios from "./axios";
import { baseurl } from "./request";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  React.useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (!!trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || "", { tmdbId: movie.id })
        .then((url) => {
          // console.log("url", url);   // TODO: some videos not showing
          const urlSearch = new URL(url).search;
          const urlParams = new URLSearchParams(urlSearch);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>

      <div className="Row-movies">
        {movies.map((mov) => (
          <img
            key={mov.id}
            className={`Row-movie ${isLargeRow && "Row-movie-large"}`}
            onClick={() => handleClick(mov)}
            src={`${baseurl}${
              isLargeRow ? mov.poster_path : mov.backdrop_path
            }`}
            alt={mov.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
