import React from 'react'
import {Card,Button} from 'react-bootstrap';

import placeholderMovie from './placeholderMovie.json'





export default function MovieDetails(props) {
  //TODO: Has to be cahnged to the actual movie details once it's implemented
  const movieData = placeholderMovie

  const genreList = movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)


  return (
    <div className={`modal-container ${props.isModal ? 'show' : 'hide'}`}>
      <Button onClick={props.closeModal}>X</Button>
      <h1>{movieData.original_title}</h1>
      <Card.Img id='movie-details-img' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}/>
      <p>{movieData.overview}</p>
      <ul>
        {genreList}
      </ul>

    </div>
  )
}
