import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/Single content/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1)  
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const fetchMovies = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    console.log(data);
    setMovies(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <h2 className="pageTitle">Movies</h2>
      <div className="movies row no-gutters justify-content-center pt-2">
      {movies &&
        movies.map((movie) => {
          return (
            <SingleContent
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.name }
                date={movie.release_date || movie.first_air_date}
                mediaType="Movie"
                voteAverage={movie.vote_average}
              />
          );
        })}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}    </div>
  );
};

export default Movies;
