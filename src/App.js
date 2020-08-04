import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './Components/Navigation/MainNav/Navbar';
import Sidebar from './Components/Navigation/SideBar/Sidebar';
import MovieCards from './Components/MovieCards/MovieCards'

const App = () => {
  return (
    <>
      <MainNav />
      <Sidebar />
      <MovieCards />
    </>
  );
} 

export default App;
