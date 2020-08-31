import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards';
import MovieDetails from './Components/MovieCards/MovieDetails/MovieDetails';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: '',
      date: [1900, 2020],
      rating: [0, 10],
      genres: '',
      searchType: '',
      sort: 'popularity.desc',
      isModal: false,
      details: {}
    })

    //Moves search input value from Navbar.js to movieCards.js
    this.loadSearch = (event, searchData) => {
      if (event.key !== 'Backspace') {
        this.setState({
          title: searchData,
          searchType: 'search'
        })
      }
    }

    this.showModal = () => {
      this.setState({ isModal: true });
    };

    this.hideModal = () => {
      this.setState({ isModal: false });
    };

    //Function to set the filters selected into app's state
    //it gets sent down as props to all subcomponents of sidebar
    this.setSidebarFilters = (filterKey, filterData) => {
      let genresIDString = ''
      const genres = [
        {
          genre: 'Action',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Adventure',
          ID: 12,
          isAdded: false,
        },
        {
          genre: 'Animation',
          ID: 16,
          isAdded: false,
        },
        {
          genre: 'Comedy',
          ID: 35,
          isAdded: false,
        },
        {
          genre: 'Crime',
          ID: 80,
          isAdded: false,
        },
        {
          genre: 'Documentary',
          ID: 99,
          isAdded: false,
        },
        {
          genre: 'Drama',
          ID: 18,
          isAdded: false,
        },
        {
          genre: 'Family',
          ID: 10751,
          isAdded: false,
        },
        {
          genre: 'Fantasy',
          ID: 14,
          isAdded: false,
        },
        {
          genre: 'History',
          ID: 36,
          isAdded: false,
        },
        {
          genre: 'Horror',
          ID: 27,
          isAdded: false,
        },
        {
          genre: 'Music',
          ID: 10402,
          isAdded: false,
        },
        {
          genre: 'Mystery',
          ID: 9648,
          isAdded: false,
        },
        {
          genre: 'Romance',
          ID: 10749,
          isAdded: false,
        },
        {
          genre: 'Science Fiction',
          ID: 878,
          isAdded: false,
        },
        {
          genre: 'TV Movie',
          ID: 10770,
          isAdded: false,
        },
        {
          genre: 'Thriller',
          ID: 53,
          isAdded: false,
        },
        {
          genre: 'War',
          ID: 10752,
          isAdded: false,
        },
        {
          genre: 'Western',
          ID: 37,
          isAdded: false,
        }
      ];
      let sortedDate = []
      this.setState({
        searchType: 'discover',
      })

      switch(filterKey) {
        case 'date':
          sortedDate = filterData.sort()
          this.setState({
            [filterKey]: sortedDate,
          })
          break
        case 'rating':
          filterData.sort((a, b) => a - b);
          this.setState({
            [filterKey]: filterData,
          })
          break
        case 'genres':
          filterData.map((o) => {
            for(let i = 0; i < genres.length; i++) {
              if (o === genres[i].genre) {
                  genres[i].isAdded = !genres[i].isAdded;
              }
            }

            genres.map((item) => {
              if (item.isAdded === true) {
                genresIDString += `${item.ID},`
              }
              this.setState({
                [filterKey]: genresIDString,
              })
              return true
            })
            return true
          })
          break
        default:
        this.setState({
          [filterKey]: filterData,
        })
      }
    }
  }

  getDetails(details) {
    this.setState({
      details: details
    })
  }


  render() {
    return (
      <>
        <MovieDetails isModal={this.state.isModal} closeModal={this.hideModal} movieDetails={this.state.details}/>
        <MainNav submitSearch={this.loadSearch}/>
        <Sidebar setSidebarFilters={this.setSidebarFilters} />
        <MovieCards search={this.state.title} details={(props) => this.getDetails(props)} genres={this.state.genres} dateRange={this.state.date} ratings={this.state.rating} searchType={this.state.searchType} sort={this.state.sort} showModal={this.showModal}/>
      </>
    );
  }
}

export default App;
