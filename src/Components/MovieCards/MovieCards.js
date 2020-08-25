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
    })
    .then(
      () => this.setState({movies: moviesArr}),
      error => this.setState({error})
    )
  }

  // Runs when state updates
  componentDidUpdate(prevProps) {
    console.log(this.props);

    if (this.props.search !== prevProps.search) {
      let moviesArr = []
      console.log('search');
      // eslint-disable-next-line no-undef
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then( result => {
        moviesArr = result.results
        console.log(moviesArr);
      })
      .then(
        () => this.setState({movies: moviesArr}),
        error => this.setState({error})
      )
    } else if (this.props !== prevProps){
      let moviesArr = []
      // eslint-disable-next-line no-undef
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${this.props.dateRange[0]}-01-01&primary_release_date.lte=${this.props.dateRange[1]}-01-01&with_genres=${this.props.genres}&vote_average.gte=${this.props.ratings[0]}&vote_average.lte=${this.props.ratings[1]}`)
      .then(res => res.json())
      .then( result => {
        moviesArr = result.results
        console.log(moviesArr);
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
    //TODO: Might be a good idea to move this out from the render method if it's possible, but I had no time to try it out.
    //Don't render if state is empty
    if (this.state.movies !== null) {
      //Loop through the movies and render them on the screen
      const movies = this.state.movies.map(movie => <MovieCard key={movie.id} title={movie.title} vote={movie.vote_average} release_year={this.shortenReleaseDate(movie.release_date)} description={this.shortenOverview(movie.overview)} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>);
      return (
        <div className='body'>
          {movies}
        </div>
      )
    } else {
      //render has to return something until fetch receives the movies and updates the state.
      return null
    }
  }
}

export default MovieCards;
