import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

class MovieCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {movies: null};
  }

// Initial state: picks a random movie from the 100 most popular movies
  componentDidMount() {
    let moviesArr = []
    // eslint-disable-next-line no-undef
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => res.json())
    .then( result => {
      moviesArr = result.results
      // moviesArr.shortOverview = this.shortenOverview(moviesArr.overview);
      // moviesArr.year = this.shortenReleaseDate(moviesArr.release_date);
    })
    .then(
      () => this.setState({movies: moviesArr}),
      error => this.setState({error})
    )
  }

  // Runs when state updates
  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      let moviesArr = []
      // eslint-disable-next-line no-undef
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then( result => {
        moviesArr = result.results
        //get shortened string
        // moviesArr.shortOverview = this.shortenOverview(moviesArr.overview);
        // //add year to title
        // moviesArr.year = this.shortenReleaseDate(moviesArr.release_date);
      })
      .then(
        () => this.setState({movies: moviesArr}),
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
    if (this.state.movies !== null) {
      const movies = this.state.movies.map(movie => <MovieCard key={movie.id} title={movie.title} vote={movie.vote_average} release_year={movie.release_date} description={movie.overview} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>);
      return (
        <div className='body'>
          {/* <MovieCard
            title={this.state.movies[0].title}
            //TODO: add year and short description to componentDidMount
            vote={this.state.vote_average}
            release_year={this.state.year}
            description={this.state.shortOverview}
            img={`https://image.tmdb.org/t/p/w500${this.state.poster_path}`}
          /> */}
          {movies}
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }

  }
}

export default MovieCards;
