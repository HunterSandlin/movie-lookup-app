import React from 'react'
import {Card,Button} from 'react-bootstrap';

import placeholderMovie from './placeholderMovie.json'





export default function MovieDetails(props) {
  //TODO: Has to be cahnged to the actual movie details once it's implemented
  const movieData = placeholderMovie

  const genreList = movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)

  const makeTime = () => {
    let runtime = movieData.runtime
    const hours = Math.floor(runtime / 60)
    let minutes = runtime - hours * 60
    if(minutes < 10) {
      minutes = `0${minutes}`
    }
    if (hours === 0) {
      return `${minutes}m`
    }
    return `${hours}h ${minutes}m`
  }

  return (
    <div className={`modal-container ${props.isModal ? 'show' : 'hide'}`} >
      <div className='modal-body'>
        <Button id='modal-close-button' onClick={props.closeModal}>X</Button>
        <h1>{movieData.original_title}</h1>
        <h2>{movieData.tagline}</h2>
        <Card.Img id='movie-details-img' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}/>
        <p>OverView: {movieData.overview}</p>
        <h3>Genres:</h3>
        <ul>
          {genreList}
        </ul>
        <p>Status: {movieData.status}</p>
        <p>Release Date: {movieData.release_date}</p>
        <p>User rating: {movieData.vote_average}/10 of {movieData.vote_count} votes</p>
        <p>Runtime: {makeTime()}</p>
      </div>
    </div>
  )
}
