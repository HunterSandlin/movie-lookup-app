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

  //Updates state
  handleChange(event, key) {
    // Switch checked state when checkbox state changes
    if(key === "checked") {
      this.setState({
        [key]: !this.state.checked
      });
    } else{
      this.setState({
        [key]: event.target.value
      });
    }
  }

  // handleKeyDown(event) {
  //   //if it's enter, update sreachInput state and search box value
  //   if (event.key === 'Enter') {
  //     // event.preventDefault();
  //     this.clearInput()
  //   }
  // }

  clearInput(event) {
    //if it's enter or submit button, update searchInput state and clear search box value
    if (event.key === 'Enter' || event.target.id === 'submitTextBox') {
      this.props.submitSearch(event, this.state.searchInput);
      this.setState({searchInput: ''});
      document.getElementById('searchTextBox').value = '';
    }
  }

  activeLink() {

  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="navbar" expand="lg">
          <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" defaultActiveKey="#home">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#series">Series</Nav.Link>
            </Nav>
            <Form inline onSubmit={e => { e.preventDefault(); }}>
              <p className="checkboxLabel">Live Search</p>
              <Form.Check
                className="liveSearchCheckbox"
                onChange={(event) => this.handleChange(event, "checked") }
              />
              {/* If live search disabled */}
              {!this.state.checked ?
              <FormControl
                id="searchTextBox"
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(event) => this.handleChange(event, "searchInput")}
                onKeyDown={(event) => this.clearInput(event)}
              /> :
              // If live search enabled
              <FormControl
                id="searchTextBox"
                type="search"
                placeholder="Live Search"
                className="mr-sm-2"
                onChange={(event) => this.handleChange(event, "searchInput")}
                onKeyUp={(event) => this.props.submitSearch(event, this.state.searchInput)}
            />}
              {/* Shows/hides button depending on checkbox's state */}
              { !this.state.checked ?
                <Button
                  id="submitTextBox"
                  onClick={(event) => this.clearInput(event)}>
                  Search
                </Button> :
                //An empty div that takes up the space of chen live search is checked and submit button is hidden
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
