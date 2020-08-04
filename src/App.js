import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './Navbar';
import Sidebar from './Sidebar';
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
