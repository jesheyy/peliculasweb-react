import React from 'react';
import StarRating from "./StarRating.jsx";

const Search = ({ searchRating, searchValue, handleSearch, handleRating }) => (
  <div className="box">
    <div className="container-1">
      <span className="icon"></span>
      <input
        type="search"
        id="search"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Busca una Película"
      />
    </div>
    <div className="container-0">
      <StarRating rate={searchRating} handleRating={handleRating} />
    </div>
  </div>
);

export default Search;
