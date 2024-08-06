import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  // fetch data from tmdb api and update store

  const dispatch = useDispatch();

  const getNowPlaylingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlaylingMovies();
  }, []);
};

export default useNowPlayingMovies;
