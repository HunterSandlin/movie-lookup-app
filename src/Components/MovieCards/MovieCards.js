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

    // get navbar's this.checked, if it's checked OR if they hit enter do this stuff...

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
          // key={this.state.imdbID}
        />


        {/* <MovieCard
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
        /> */}
      </div>
    )
  }
}

export default MovieCards;
