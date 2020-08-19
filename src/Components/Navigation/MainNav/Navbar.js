import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl /*, Button*/ } from "react-bootstrap";

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
    this.setState({
      [key]: event.target.value,
      checked: !this.state.checked
    });

  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="navbar" expand="lg">
          <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="checkbox" className="liveSearchCheckbox" onChange={(event) => this.handleChange(event, "checked") }/>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(event) => this.handleChange(event, "searchInput")}
                onKeyUp={() => this.props.submitSearch(this.state.searchInput)}
              />
              {/* <Button id="submitTextBox" onClick={() => this.props.submitSearch(this.state.searchInput)}>Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
