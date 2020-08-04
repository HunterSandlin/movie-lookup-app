import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './Navbar';
import Sidebar from './Sidebar';
import Cards from './Cards/Cards'

const App = () => {
  return (
    <>
      <MainNav />
      <Sidebar />
      <Cards />
    </>
  );
} 

export default App;
