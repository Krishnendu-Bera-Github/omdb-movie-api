import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieInfo from "./components/MovieInfo/MovieInfo";
import Movie from "./components/Movie";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
