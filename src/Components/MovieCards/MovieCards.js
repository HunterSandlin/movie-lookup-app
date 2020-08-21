import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

class MovieCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

// Initial state: picks a random movie from the 100 most popular movies
  componentDidMount() {
    let moviesObj = {}
    // eslint-disable-next-line no-undef
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.floor(Math.random() * 5 + 1)}`)
    .then(res => res.json())
    .then( result => {
      moviesObj = result.results[Math.floor(Math.random() * 20)]
      moviesObj.shortOverview = this.shortenOverview(moviesObj.overview);
      moviesObj.year = this.shortenReleaseDate(moviesObj.release_date);
      console.log(moviesObj);
      return moviesObj
    })
    .then(
      () => this.setState(moviesObj),
      error => this.setState({error})
    )
  }

  // Runs when state updates
  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      let moviesObj = {}
      // eslint-disable-next-line no-undef
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then( result => {
        console.log(result);
        moviesObj = result.results[0]
        //get shortened string
        moviesObj.shortOverview = this.shortenOverview(moviesObj.overview);
        //add year to title
        moviesObj.year = this.shortenReleaseDate(moviesObj.release_date);
        return moviesObj
      })
      .then(
        () => this.setState(moviesObj),
        error => this.setState({error})
      )
    }
  }

  shortenOverview(details) {
    return(details.split(' ').slice(0, 25).join(' ').concat('...'));
  }

  shortenReleaseDate(fullDate) {
    return(fullDate.split("-")[0])
  }


  render() {
    return (
      <div className='body'>
        <MovieCard
          title={this.state.title}
          //TODO: add year and short description to componentDidMount
          vote={this.state.vote_average}
          release_year={this.state.year}
          description={this.state.shortOverview}
          img={`https://image.tmdb.org/t/p/w500${this.state.poster_path}`}
        />
      </div>
    )
  }
}

export default MovieCards;
