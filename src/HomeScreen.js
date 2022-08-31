import React, { useEffect } from "react";
import "./styles/HomeScreen.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentaries,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrending,
  fetcOriginal,
  getAction,
  getComedy,
  getDocumentaries,
  getHorror,
  getRomance,
  getTopRated,
  getTrending,
} from "./manager/redux/movieSlice";
import { getOriginal } from "./manager/redux/movieSlice";
import Row from "./components/Row";

function HomeScreen() {
  const dispatch = useDispatch();
  const original = useSelector(getOriginal);
  const trending = useSelector(getTrending);
  const toprated = useSelector(getTopRated);
  const action = useSelector(getAction);
  const comedy = useSelector(getComedy);
  const horror = useSelector(getHorror);
  const romance = useSelector(getRomance);
  const documentaries = useSelector(getDocumentaries);

  useEffect(() => {
    dispatch(fetcOriginal());
    dispatch(fetchTrending());
    dispatch(fetchTopRated());
    dispatch(fetchActionMovies());
    dispatch(fetchComedyMovies());
    dispatch(fetchHorrorMovies());
    dispatch(fetchRomanceMovies());
    dispatch(fetchDocumentaries());
  }, [dispatch]);

  return (
    <div className="home__screen">
      <Navbar />
      <Hero />
      <Row title="IDOV Originals" getMovie={original} isLargeRow />
      <Row title="Trending Now" getMovie={trending} />
      <Row title="Top Rated" getMovie={toprated} />
      <Row title="Action Movies" getMovie={action} />
      <Row title="Comedy Movies" getMovie={comedy} />
      <Row title="Horror Movies" getMovie={horror} />
      <Row title="Romance Movies" getMovie={romance} />
      <Row title="Documentaries" getMovie={documentaries} />
    </div>
  );
}

export default HomeScreen;
