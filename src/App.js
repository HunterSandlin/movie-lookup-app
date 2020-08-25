import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({})

    //Moves search input value between from Navbar.js to movieCards.js
    this.loadSearch = (event, searchData) => {
      if (event.key !== 'Backspace') {
        this.setState({
          title: searchData,
        })
      }
    }

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
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Crime',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Documentary',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Drama',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Family',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Fantasy',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'History',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Horror',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Music',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Mystery',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Romance',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Science Fiction',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'TV Movie',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Thriller',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'War',
          ID: 28,
          isAdded: false,
        },
        {
          genre: 'Western',
          ID: 28,
          isAdded: false,
        }
      ];
      console.log(filterData);
      if (filterKey === 'genres') {
        filterData.map((o) => {
          for(let i = 0; i < genres.length; i++) {
            if (o === genres[i].genre) {
                genres[i].isAdded = !genres[i].isAdded;
                console.log(genres);
            }
          }
      });

      genres.map((item) => {
        if (item.isAdded === true) {
          genresIDString += `${item.ID},`
        }
        this.setState({
          [filterKey]: genresIDString,
        })
      })
      } else {
        this.setState({
          [filterKey]: filterData,
        })
      }
    }
  }

  render() {
    return (
      <>
        <MainNav submitSearch={this.loadSearch}/>
        <Sidebar setSidebarFilters={this.setSidebarFilters} />
        <MovieCards search={this.state.title}/>
      </>
    );
  }
}

export default App;
