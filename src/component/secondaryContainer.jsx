import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import usePopularMovies from  "../customHooks/usePopularMovies"

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  // Use the custom hook to fetch popular movies
  usePopularMovies();

  useEffect(() => {
    dispatch(addNowPlayingMovies([{ id: 1, poster_path: "/path1.jpg" }, { id: 2, poster_path: "/path2.jpg" }]));
  }, [dispatch]);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.popularMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
