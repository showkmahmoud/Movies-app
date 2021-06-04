import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/Single content/SingleContent";

const Trending = () => {
  const [page, setPage] = useState(1)  
  const [contents, setContents] = useState([]);
  const fetchTrending = async () => {
    //we are here make destructuring for data
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContents(data.results);
  
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);
  return (
    <div>
      <h2 className='pageTitle'>TRENDING TODAY</h2>
      <div className="trending row no-gutters justify-content-between p-2">
        {contents &&
          contents.map((content) => {
            return (
              <SingleContent
                key={content.id}
                id={content.id}
                poster={content.poster_path}
                title={content.title || content.name }
                date={content.release_date || content.first_air_date}
                mediaType={content.media_type}
                voteAverage={content.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage = {setPage}/>
    </div>
  );
};

export default Trending;
