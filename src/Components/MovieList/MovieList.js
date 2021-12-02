import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

import './MovieList.css'

const MovieList = ({ movies, title, ratingValue }) => {
  return (
    <div className="movieList">
      {
        movies
          .filter(movie => movie.title.toUpperCase().includes(title.toUpperCase())
            && movie.rating >= ratingValue
          )
          .map(movie =>
            <MovieCard movie={movie} key={movie.id} />
          )
      }
    </div>
  )
}

export default MovieList