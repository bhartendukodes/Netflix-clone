import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground"; 
import VideoTitle from "./videoTittle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  // Log the movies state to verify data
  console.log("Movies State:", movies);

  if (!movies || movies.length === 0) return <div>Loading...</div>;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
