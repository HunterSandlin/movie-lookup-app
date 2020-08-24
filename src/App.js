import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: ''
    })

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
    this.setSidebarFilters = (key, searchData) => {
      this.setState({
        [key]: searchData,
      })
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
