import React from 'react'
import placeholderMovie from './placeholderMovie.json'





export default function MovieDetails(props) {
  //TODO: Has to be cahnged to the actual movie details once it's implemented
  const movieData = placeholderMovie


  return (
    <div className={`modal-container ${props.isModal ? 'show' : 'hide'}`}>
      <div onClick={props.closeModal}>X</div>
      <h1>{movieData.homepage}</h1>
    </div>
  )
}
