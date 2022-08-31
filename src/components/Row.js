import React from "react";
import "../styles/Row.css";
import ScrollRow from "./ScrollRow";
// import loadingLogo from "../logoloading.png";

function Row({ title, getMovie, isLargeRow = false }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const movies = getMovie;

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <ScrollRow className="row__posters" isLargeRow={isLargeRow}>
        {movies &&
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster ${isLargeRow && "row__posterlarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
      </ScrollRow>
    </div>
  );
}

export default Row;
