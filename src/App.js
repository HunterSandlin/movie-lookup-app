import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const App = () => {
  return (
    <>
    <Navbar class="navbar" expand="lg">
    <Navbar.Brand href="#home">Card Stats</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  <Sidebar />
  <CardTest />
  </>
  );
}

const Sidebar = () => {
  return (
    <div class="sidenav">
      
    </div>
  );
}

//TODO: figure out why mtgsdk doesnt work, broken api? 
const CardTest = () => {
  const mtg = require('mtgsdk');
  let card = {};
  mtg.card.find(3)
  .then(result => card = result.card.name);

  console.log(card.toString());
  return (
    <h1>{card.toString()}</h1>
  );
}



export default App;
