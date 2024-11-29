import React, { useState } from 'react';
import Search from './Components/Search.jsx';
import MovieList from './Components/MovieList.jsx';
import { moviesData } from "./data.jsx";
import './App.css';
import AddMovie from './Components/AddMovie.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Description from './Components/Description.jsx';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  const handleRating = (newRate) => {
    setSearchRating((prevRate) => (prevRate === newRate ? null : newRate));
  };

  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div className="container">
      <div className="gradient-text">PELICULAS WEB</div>
      
      <BrowserRouter>
        <Search
          searchRating={searchRating}
          searchValue={searchValue}
          handleRating={handleRating}
          handleSearch={handleSearch}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                movies={movies.filter((movie) => {
                  const matchesSearch = movie.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase().trim());
                  const matchesRating =
                    searchRating === null || movie.rating === searchRating;

                  return matchesSearch && matchesRating;
                })}
              />
            )}
          />
          <Route
            path="/Description/:name"
            render={(props) => <Description movies={movies} {...props} />}
          />
        </Switch>
      </BrowserRouter>
      
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
