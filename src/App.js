import React from "react";

import "./App.css";
import Movies from "./pages/movies/Movies";
import Naav from "./components/naav/Naav";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";
import Tv from "./pages/tv/Tv";
import Favorite from "./pages/favorite/Favorite";

const App = () => {
  return (
    <div>
      <Naav />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
