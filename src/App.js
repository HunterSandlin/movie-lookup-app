import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ title: '' })

    this.loadSearch = (searchData) => {
      this.setState({title: searchData})
    }

  }

  render() {
    return (
      <>
        <MainNav submitSearch={this.loadSearch}/>
        <Sidebar />
        <MovieCards search={this.state.title}/>
      </>
    );
  }
}

export default App;
