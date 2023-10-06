import React, { useEffect, useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import imdbLogo from "../../assets/imdb.png";
import pro from "../../assets/pro.png";

const Search = ({ onSubmit, apiCall }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text, selectedOption);
    setText("");
    handleSearch();
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="parent-container">
      <div className="container-search">
        <div className="logo">
          <div onClick={apiCall}>
            <img src={imdbLogo} alt="" />
          </div>
        </div>
        <div className="menu">
          <MenuIcon />
          <p>Menu</p>
        </div>
        <div className="search-items">
          <div className="dropdown">
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="s">All</option>
              <option value="t">Title</option>
            </select>
          </div>
          <div className="line"></div>
          <div className="search">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search OMDB"
            />

            <SearchIcon onClick={handleSubmit} />
          </div>
        </div>
        <div className="pro">
          <img src={pro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
