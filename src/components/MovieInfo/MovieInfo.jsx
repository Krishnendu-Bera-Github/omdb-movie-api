import React from "react";
import "./movieInfo.css";

const MovieInfo = ({ movieItem }) => {
  // console.log(params);
  const {
    Title,
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Released,
    imdbRating,
    Runtime,
    Poster,
  } = movieItem;
  return (
    <div className="movieInfo-container">
      <div className="movie-card">
        <div className="left">
          <img src={Poster} alt="" />
        </div>
        <div className="right">
          <p>
            Rating : <span>🌟 {imdbRating}</span>
          </p>
          <p>
            Title : <span>{Title}</span>{" "}
          </p>
          <p>
            Year : <span>{Released}</span>
          </p>
          <p>
            Runtime : <span>{Runtime}</span>
          </p>
          <p>
            Genre : <span>{Genre}</span>
          </p>
          <p>
            Director : <span>{Director}</span>
          </p>
          <p>
            Actors :<span>{Actors}</span>
          </p>
          <p>
            Plot : <span className="plot">{Plot}</span>
          </p>
          <p>
            Language : <span>{Language}</span>
          </p>
          <p>
            Country : <span>{Country}</span>
          </p>
          <p>
            Awards : <span>{Awards}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
