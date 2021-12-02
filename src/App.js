import React, { useState } from 'react'

import MoviesData from './Components/MoviesData/MoviesData';
import MovieList from './Components/MovieList/MovieList'
import FilterByTitle from './Components/FilterByTitle/FilterByTitle'
import FilterByRating from './Components/Rating/Rating'

import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';

function App() {

  const [movies, setMovies] = useState(MoviesData);

  // Title to search
  const [title, setTitle] = useState("");
  // Value of the rating on change ( to send to rating.js )
  const [ratingValue, setRatingValue] = useState(2);


  return (
    <div className="App">
      <div className="filterPart">
        <FilterByTitle title={title} setTitle={setTitle} />
        <FilterByRating isFilter={true} ratingValue={ratingValue} setRatingValue={setRatingValue} />
      </div>
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} title={title} ratingValue={ratingValue} />
    </div>
  );
}

export default App;