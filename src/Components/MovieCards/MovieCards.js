import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

const MovieCards = () => {
  return (
    <div className='body'>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default MovieCards;