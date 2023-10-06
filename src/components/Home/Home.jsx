import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import axios from "axios";
import "./home.css";
import MovieInfo from "../MovieInfo/MovieInfo";
import Spinner from "../Search/Spinner/Spinner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [changeState, setChangeState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://www.omdbapi.com/?apikey=7d9466fe&";

  const handleSearch = (queryText, selectedOption) => {
    fetchAPI(queryText, selectedOption);
  };

  const fetchAPI = async (queryText = "avengers", selectedOption) => {
    let queryParam;
    setIsLoading(true);

    try {
      if (selectedOption === "t") {
        queryParam = `t=${queryText}`;
      } else if (selectedOption === "s") {
        queryParam = `s=${queryText}`;
      } else {
        queryParam = `s=${queryText}`;
      }

      const response = await axios.get(`${url}${queryParam}`);

      if (response && response.data.Search) {
        setMovies(response.data.Search);
        setChangeState(true);
      } else if (response && response.data) {
        setSingleMovie(response.data);
        setChangeState(false);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log("This is error", error);
    }
    setIsLoading(false);
  };

  // console.log(movies);
  // console.log(singleMovie);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container-home">
      <Search
        onSubmit={handleSearch}
        apiCall={(e) => {
          e.preventDefault();
          fetchAPI("avengers");
        }}
      />
      {isLoading ? (
        <Spinner />
      ) : !changeState ? (
        singleMovie.Response === "True" ? (
          <MovieInfo movieItem={singleMovie} />
        ) : (
          <div className="error-handle">{singleMovie.Error}</div>
        )
      ) : (
        <div className="card-list">
          {movies.map((item) => (
            <Card key={item.imdbID} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
