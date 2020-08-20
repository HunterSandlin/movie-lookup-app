import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

class MovieCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
// Quick
  componentDidMount() {
    let moviesObj = {}
    console.log(this.props.search);
    // eslint-disable-next-line no-undef
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.floor(Math.random() * 5 + 1)}`)
    .then(res => res.json())
    .then( result => {
      // console.log(result);
      moviesObj = result.results[Math.floor(Math.random() * 20)]
      console.log(moviesObj);
      return moviesObj
    })
    .then(
      () => this.setState(moviesObj),
      error => this.setState({error})
    )
  }

   componentDidUpdate(prevProps) {

    //TODO: get navbar's this.checked, if it's checked OR if they hit enter do this stuff...

    if (this.props.search !== prevProps.search) {
      let moviesObj = {}
      console.log(this.props.search);
      // eslint-disable-next-line no-undef
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then( result => {
        console.log(result);
        moviesObj = result.results[0]
        console.log(moviesObj);
        return moviesObj
      })
      .then(
        () => this.setState(moviesObj),
        error => this.setState({error})
      )
    }
  }

  render() {
    return (
      <div className='body'>
        <MovieCard
          title={this.state.title}
          avg_rating={this.state.vote_average}
          year={`Release Date: ${this.state.release_date}`}
          description={this.state.overview}
          img={`https://image.tmdb.org/t/p/w500${this.state.poster_path}`}
        />
      </div>
    )
  }
}

export default MovieCards;
