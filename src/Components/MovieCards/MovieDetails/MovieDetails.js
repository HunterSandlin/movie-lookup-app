import React from 'react'
import {Card,Button} from 'react-bootstrap';

export default function MovieDetails(props) {

  const movieData = props.movieDetails
  console.log(movieData);

  const shortenReleaseDate = (fullDate) => {
    return(fullDate.split("-")[0])
  }

  if(movieData.original_title) {
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
      <div className={`modal-container ${props.isModal ? 'show' : 'hide'}`}>
        <div id='modal-body'>
          <Button id='modal-close-button' onClick={props.closeModal} variant='danger'>X</Button>
          <div id='modal-details-main'>

            <h1>{movieData.title} ({shortenReleaseDate(movieData.release_date)}) <em>{movieData.original_title !== movieData.title ? `- ${movieData.original_title}`: null}</em></h1>
            {!movieData.tagline ? null : <h5>&quot; {movieData.tagline} &quot;</h5>}
            <h3 className='overview'>Overview:</h3>
            <p id='overview-text'>{movieData.overview}</p>
            <h3 id='genres-title'>Genres:</h3>
              <ul id='modal-details-genre-list'>
                {genreList}
              </ul>
            <div id='modal-details-sub'>
              <div>
                <h3>Status:</h3>
                <p>{movieData.status}</p>
                <h3>Release Date:</h3>
                <p>{movieData.release_date}</p>
              </div>
              <div>
                <h3>User rating:</h3>
                <p>{movieData.vote_average}/10 of {movieData.vote_count} votes</p>
                <h3>Runtime:</h3>
                <p>{makeTime()}</p>
              </div>
            </div>


          </div>
          <div>
          <Card.Img id='movie-details-img' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}/>
          </div>



        </div>
      </div>
    )
  } else {
    return false
  }
  }


