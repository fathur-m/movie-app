import React from "react";
import { useSelector } from "react-redux";
import { getOriginal } from "../manager/redux/movieSlice";
import "../styles/Hero.css";
import { FaPlay } from "react-icons/fa";

function Hero() {
  const movies = useSelector(getOriginal);

  const randomMovie = movies[Math.floor(Math.random() * 20 - 1)];

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <header className="hero__container">
      <div
        className="hero"
        style={{
          backgroundSize: "cover",
          backgroundColor: "#1e1c1c",
          backgroundImage: `url(${
            randomMovie?.backdrop_path
              ? base_url + randomMovie?.backdrop_path
              : ""
          })`,
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="hero__content">
        <h1 className="hero__title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name ||
            ""}
        </h1>
        <button className="hero__btn">
          Trailer <FaPlay />
        </button>
        <p className="hero__desc">{truncate(randomMovie?.overview, 200)}</p>
        <p className="release">
          Release date <i>{randomMovie?.first_air_date}</i>
        </p>
      </div>
    </header>
  );
}

export default Hero;
