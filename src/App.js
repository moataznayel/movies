import React from "react";

import "./App.css";
import Movies from "./pages/movies/Movies";
import Naav from "./components/naav/Naav";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";

const App = () => {
  return (
    <div>
      <Naav />
      {/* <Movies /> */}
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
