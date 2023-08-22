import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Search = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>fg</div>;
};

export default Search;
