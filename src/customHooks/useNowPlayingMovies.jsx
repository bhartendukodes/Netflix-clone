import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async (signal) => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', { ...API_OPTIONS, signal });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to fetch now playing movies:', error);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getNowPlayingMovies(controller.signal);

    // Clean up function to abort the fetch request if the component unmounts
    return () => controller.abort();
  }, [dispatch]);
};

export default useNowPlayingMovies;
