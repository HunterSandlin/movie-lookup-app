import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

const App = () => {
  const [searchEntry, setSearchEntry] = useState('Braveheart');

  const loadSearch = search => {
    setSearchEntry(search);
    console.log(search)
  }

  return (
    <>
      <MainNav sumbitSearch={loadSearch}/>
      <Sidebar />
      <MovieCards search={searchEntry}/>
    </>
  );
}

export default App;
