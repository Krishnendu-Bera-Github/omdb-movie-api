import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { Poster, Title, Year } = data;

  return (
    <div className="container-card">
      <div className="card">
        <img src={Poster} alt="" />
        <div className="info">
          <div className="name-rating">
            <span>🌟 {(Math.random() * 10).toFixed(1)}</span>
            <span>{Year}</span>
          </div>
          <div className="title">
            <p>{Title.length > 30 ? Title.slice(0, 35) + "..." : Title}</p>
          </div>
          <div className="link">
            <Link style={{ color: "#5799ef" }} to={`/movie/${data.imdbID}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
