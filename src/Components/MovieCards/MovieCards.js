import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard/MovieCard'

class MovieCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
////////////////<Button onClick={() => props.sumbitSearch('Her')}>Search</Button>
  componentDidMount() {
    let moviesObj = {}
    // eslint-disable-next-line no-undef
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${this.props.search}`)
    .then(res => res.json())
    .then( result => {
      moviesObj = result
      return moviesObj
    })
    .then(
      () => this.setState(moviesObj),
      error => this.setState({error})
    )
   }
  render() {
    return (
      <div className='body'>
        <MovieCard
          title={this.state.Title}
          year={this.state.Year}
          description={this.state.Plot}
          img={this.state.Poster}
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
