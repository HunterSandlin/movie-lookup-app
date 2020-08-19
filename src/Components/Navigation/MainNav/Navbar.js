import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl , Button } from "react-bootstrap";

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      checked: false
    };
  }

  handleChange(event, key) {
    console.log(this.state);
    if(key === "checked") {
      this.setState({
        [key]: !this.state.checked
      });
    } else {
      this.setState({
        [key]: event.target.value
      });
    }
  }

  handleKeyDown(event) {
    //if it's enter, update sreachInput state and search box value
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.submitSearch(this.state.searchInput);
      this.setState({searchInput: ''});
      document.getElementById('searchTextBox').value = '';
    } 
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="navbar" expand="lg">
          <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mar-small">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav className="mar-small">
              <Nav.Link href="#movies">Movies</Nav.Link>
            </Nav>
            <Nav className="mar-small">
              <Nav.Link href="#series">Series</Nav.Link>
            </Nav>
            <Form inline className="move-right">
            <p className="checkboxLabel">Live Search</p>
              <Form.Check
              // type="checkbox"
              className="liveSearchCheckbox"
              onChange={(event) => this.handleChange(event, "checked") }
              />
              {!this.state.checked ?               
              <FormControl
                id="searchTextBox"
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                //TODO: Create a function that handles both of these functions togetehr because I think the enter doesn't submit because onChange gets called befor onKeyUp
                onChange={(event) => this.handleChange(event, "searchInput")}
                onKeyDown={(event) => this.handleKeyDown(event)}
              /> : 
              <FormControl
              id="searchTextBox"
              type="search"
              placeholder="Search"
              className="mr-sm-2"
              //TODO: Create a function that handles both of these functions togetehr because I think the enter doesn't submit because onChange gets called befor onKeyUp
              onChange={(event) => this.handleChange(event, "searchInput")}
              onKeyUp={() => this.props.submitSearch(this.state.searchInput)}
            />}

              { !this.state.checked ?
                <Button id="submitTextBox" onClick={() => this.props.submitSearch(this.state.searchInput)}>Search</Button> :
                <div className="emptyDiv"></div>
                }
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
