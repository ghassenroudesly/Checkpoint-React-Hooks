import React, { useState } from 'react'
import { BrowserRouter as Routes , Route,Link} from 'react-router-dom';

import MoviesData from './Components/MoviesData/MoviesData';
import MovieList from './Components/MovieList/MovieList'
import FilterByTitle from './Components/FilterByTitle/FilterByTitle'
import FilterByRating from './Components/Rating/Rating'

import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieDetail from './Components/MovieDetail.js/MovieDetail';




function App() {

  const [movies, setMovies] = useState(MoviesData);
  console.log(movies)
  console.log(setMovies)


  // Title to search
  const [title, setTitle] = useState("");
  // Value of the rating on change ( to send to rating.js )
  const [ratingValue, setRatingValue] = useState(2);


  return (
    <div className="App">
      <Routes> 
      <Route exact path ="/" component={MovieList}>
      <div className="filterPart">
        <FilterByTitle title={title} setTitle={setTitle} />
        <FilterByRating isFilter={true} ratingValue={ratingValue} setRatingValue={setRatingValue} />
      </div>
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} title={title} ratingValue={ratingValue} />
      </Route>
      <Route exact path="/MovieDetail/:moviesId" component={MovieDetail}/>
      <Link className="home" to="/"><button>Home</button></Link>

      </Routes>
    </div>
  );
}

export default App;