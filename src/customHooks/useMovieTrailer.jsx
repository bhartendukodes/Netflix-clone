import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const videosClipsOfMovie = await response.json();

        const filterData = videosClipsOfMovie.results?.filter(
          (x) => x.type === "Teaser"
        );
        const trailer = filterData.length ? filterData[0] : videosClipsOfMovie.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch movie trailers", error);
      }
    };

    getMovieVideos();
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
