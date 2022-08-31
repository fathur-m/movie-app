import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import requests from "../../Requests";

export const fetcOriginal = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const request = await axios.get(requests.fetchOriginal);
    return request.data.results;
  }
);
export const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async () => {
    const request = await axios.get(requests.fetchTrending);
    return request.data.results;
  }
);
export const fetchTopRated = createAsyncThunk(
  "movies/fetchTopRated",
  async () => {
    const request = await axios.get(requests.fetchTopRated);
    return request.data.results;
  }
);
export const fetchActionMovies = createAsyncThunk(
  "movies/fetchActionMovies",
  async () => {
    const request = await axios.get(requests.fetchActionMovies);
    return request.data.results;
  }
);
export const fetchComedyMovies = createAsyncThunk(
  "movies/fetchComedyMovies",
  async () => {
    const request = await axios.get(requests.fetchComedyMovies);
    return request.data.results;
  }
);
export const fetchHorrorMovies = createAsyncThunk(
  "movies/fetchHorrorMovies",
  async () => {
    const request = await axios.get(requests.fetchHorrorMovies);
    return request.data.results;
  }
);
export const fetchRomanceMovies = createAsyncThunk(
  "movies/fetchRomanceMovies",
  async () => {
    const request = await axios.get(requests.fetchRomanceMovies);
    return request.data.results;
  }
);
export const fetchDocumentaries = createAsyncThunk(
  "movies/fetchDocumentaries",
  async () => {
    const request = await axios.get(requests.fetchDocumentaries);
    return request.data.results;
  }
);
export const initialState = {
  moviesOriginal: {
    data: [],
    loading: null,
  },
  moviesTrending: [],
  moviesTopRated: [],
  moviesAction: [],
  moviesComedy: [],
  moviesHorror: [],
  moviesRomance: [],
  documentaries: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [fetcOriginal.pending]: (state) => {
      state.moviesOriginal.loading = true;
    },
    [fetcOriginal.fulfilled]: (state, action) => {
      state.moviesOriginal.loading = false;
      state.moviesOriginal.data = action.payload;
    },
    [fetcOriginal.rejected]: (state) => {
      state.moviesOriginal.loading = false;
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.moviesTrending = action.payload;
    },
    [fetchTopRated.fulfilled]: (state, action) => {
      state.moviesTopRated = action.payload;
    },
    [fetchActionMovies.fulfilled]: (state, action) => {
      state.moviesAction = action.payload;
    },
    [fetchComedyMovies.fulfilled]: (state, action) => {
      state.moviesComedy = action.payload;
    },
    [fetchHorrorMovies.fulfilled]: (state, action) => {
      state.moviesHorror = action.payload;
    },
    [fetchRomanceMovies.fulfilled]: (state, action) => {
      state.moviesRomance = action.payload;
    },
    [fetchDocumentaries.fulfilled]: (state, action) => {
      state.documentaries = action.payload;
    },
  },
});

export const getStatus = (state) => state.movies.moviesOriginal.loading;
export const getOriginal = (state) => state.movies.moviesOriginal.data;
export const getTrending = (state) => state.movies.moviesTrending;
export const getTopRated = (state) => state.movies.moviesTopRated;
export const getAction = (state) => state.movies.moviesAction;
export const getComedy = (state) => state.movies.moviesComedy;
export const getHorror = (state) => state.movies.moviesHorror;
export const getRomance = (state) => state.movies.moviesRomance;
export const getDocumentaries = (state) => state.movies.documentaries;

export default movieSlice.reducer;
