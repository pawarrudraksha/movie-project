import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movies/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
