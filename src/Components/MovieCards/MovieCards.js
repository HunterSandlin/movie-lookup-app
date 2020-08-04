import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

const MovieCards = () => {
  return (
    <div className='body'>
      <MovieCard 
        title="Donnie Darko" 
        year="2001" 
        description= "During the presidential election of 1988, a teenager named Donnie Darko..."
        img="https://posteritati.com/posters/000/000/057/472/donnie-darko-md-web.jpg"
      />

      <MovieCard 
        title="Whiplash" 
        year="2014" 
        description= "Andrew Neiman (Miles Teller) is an ambitious young jazz drummer, in pursuit..."
        img="https://i.etsystatic.com/18345845/r/il/e8f2af/1693146374/il_794xN.1693146374_gdzq.jpg"
      />

      <MovieCard 
        title="Hereditary" 
        year="2018" 
        description= "When the matriarch of the Graham family passes away, her daughter and grandchildren..."
        img="https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY1000_SX675_AL_.jpg"
      />
     
      <MovieCard 
        title="The Master" 
        year="2012" 
        description= "Freddie Quell (Joaquin Phoenix) is a troubled, boozy drifter struggling with the..."
        img="https://static.rogerebert.com/uploads/movie/movie_poster/the-master-2012/large_8o7xRloe8eAdlA6pwkeCVFt0UX4.jpg"
      />
    </div>
  )
}

export default MovieCards;