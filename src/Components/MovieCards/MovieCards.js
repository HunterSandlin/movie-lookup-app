import React, { PureComponent } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

class MovieCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      searchPage: 1
    };
    this.moviesArr = []
    // this.fetchedSearchPage = Number
  }

// Initial state: picks a random movie from the 100 most popular movies
  componentDidMount() {
    this.searchMovie(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.Searchpage}`)
  }

  // Runs when state updates
  componentDidUpdate(prevProps, prevState) {

    if (this.props.search !== prevProps.search) {
      this.moviesArr = []
      this.searchPage = 1
      this.searchMovie(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)

    } else if (prevState.searchPage !== this.state.searchPage) {
      this.searchMovie(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=${this.state.searchPage}&include_adult=false`)

    } else if (this.props !== prevProps){
      this.moviesArr = []
      this.searchMovie(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.props.search}&page=1&include_adult=false`)
    }
  }

  shortenOverview(details) {
    return(details.split(' ').slice(0, 25).join(' ').concat('...'));
  }

  shortenReleaseDate(fullDate) {
    return(fullDate.split("-")[0])
  }

  incrementPage (pageNumber) {
    pageNumber = pageNumber + 1
    console.log(pageNumber);
    this.setState({searchPage: pageNumber})
  }

  async searchMovie(URL) {
    try {
      const res = await fetch(URL)
      const resJSON =  await res.json()
      this.moviesArr = this.moviesArr.concat(resJSON.results)
      this.setState({movies: this.moviesArr})
      return true
    } catch (error) {
      this.setState({error})
    }
  }


  render() {
    //TODO: Might be a good idea to move this out from the render method if it's possible, but I had no time to try it out.
    //Don't render if state is empty
    if (this.state.movies !== null) {
      //Loop through the movies and render them on the screen
      console.log(this.state.movies);
      const movies = this.state.movies.map(movie => <MovieCard key={movie.id} title={movie.title} vote={movie.vote_average} release_year={this.shortenReleaseDate(movie.release_date)} description={this.shortenOverview(movie.overview)} img={!movie.poster_path ? "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" :`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>);
      return (
        <>
        <div >
          <div className='body'>
            {movies}
            {k}
            <Button className="load-more-button" onClick={() => this.incrementPage(this.state.searchPage)}>Load more results</Button>
          </div>

        </div>

        </>
      )
    } else {
      //render has to return something until fetch receives the movies and updates the state.
      return null
    }
  }
}

export default MovieCards;
