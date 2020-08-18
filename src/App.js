import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ title: 'Braveheart' })

    this.loadSearch = (searchData) => {
      console.log(searchData)
      this.setState({title: searchData})
      console.log(this.state);
    }

    console.log(this.state);
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

// const App = () => {
//   setState('')

//   const loadSearch = search => {
//     setState(search);
//   }

//   return (
//     <>
//       <MainNav sumbitSearch={loadSearch}/>
//       <Sidebar />
//       <MovieCards search={}/>
//     </>
//   );
// }

// export default App;
