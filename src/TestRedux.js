import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import "../styles/Row.css";

import loadingLogo from "../logoloading.png";
import ScrollRow from "./ScrollRow";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const base_url = "https://image.tmdb.org/t/p/original/";

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setMovies(request.data.results);
  //     setLoading(false);
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <ScrollRow className="row__posters">{}</ScrollRow>

      {/* <div ref={scrollRef} className="row__posters">
        {loading ? (
          <>
            {Array.from(Array(10), (i, e) => {
              return (
                <img
                  key={e}
                  src={loadingLogo}
                  alt="/"
                  className={`loading__logo ${
                    isLargeRow && "loading__logolarge"
                  }`}
                />
              );
            })}
          </>
        ) : (
          <>
            {movies.map(
              (movie) =>
                ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) && (
                  <img
                    className={`row__poster ${
                      isLargeRow && "row__posterlarge"
                    }`}
                    key={movie.id}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                )
            )}
          </>
        )}
      </div> */}
      {/* {arrow && (
        <div className="left__arrow">
          <IoIosArrowForward className="arrow__btnleft" onClick={prevBtn} />
          <span
            className={isLargeRow ? "arrow__bglargeleft" : "arrow__bgleft"}
          ></span>
        </div>
      )}
      <div className="right__arrow">
        <IoIosArrowForward className="arrow__btn" onClick={nextBtn} />
        <span className={isLargeRow ? "arrow__bglarge" : "arrow__bg"}></span>
      </div> */}
    </div>
  );
}

export default Row;
