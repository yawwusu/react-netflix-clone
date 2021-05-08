import React from "react";
import axios from "./axios";
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      console.log("req", req.data.results);
      setMovies(req.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2>{title}</h2>

      <div className="Row-movies">
        {movies.map((mov) => (
          <img
            key={mov.id}
            className="Row-movie"
            src={`${baseurl}${mov.poster_path}`}
            alt={mov.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
