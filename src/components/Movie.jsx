import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo/MovieInfo";
import "./MovieInfo/movieInfo.css";
import Spinner from "./Search/Spinner/Spinner";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${your_api}&i=${id}`
    );
    setIsLoading(false);
    setMovie(response.data);
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <button
        style={{
          padding: "5px 10px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
      >
        Go to Home
      </button>
      {isLoading ? <Spinner /> : movie && <MovieInfo movieItem={movie} />}
    </div>
  );
};

export default Movie;
