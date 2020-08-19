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
            <p className="checkboxLabel">Live Search</p>
              <Form.Check
              // type="checkbox"
              className="liveSearchCheckbox"
              onChange={(event) => this.handleChange(event, "checked") }
              />

              <FormControl
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                //Create a function that handles both of these functions togetehr because I think the enter doesn't submit because onChange gets called befor onKeyUp
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
