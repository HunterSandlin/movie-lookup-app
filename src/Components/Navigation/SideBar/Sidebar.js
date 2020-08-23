import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        genres: []
      },
      toggles: {
        genre: false,
        isDark: false,
      },
    };
  }

  handleChange(event, key) {
    switch (key) {
      case 'genre':
        this.setState({
          toggles:{
            [key]: !this.state.toggles.genre,
            isDark: this.state.toggles.isDark
          }
        });
        break;
      case 'isDark':
        this.setState({
          toggles:{
            genre: this.state.toggles.genre,
            [key]: !this.state.toggles.isDark
          }
        });
        break;
      default: return
    }
  }


  render() {
    return (
      <div className="sidenav">
        <div>
          <Form.Check
            className='modal-genre-checkbox'
            type="switch"
            id="genre-switch"
            label="Filter by Genre"
            onChange={event => this.handleChange(event, "genre")}
          />
          <Form className={!this.state.toggles.genre ? 'hidden' : 'modal-genre-form'}>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Action" value="28" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Adventure" value="12" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Animation" value="16" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Comedy" value="35" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Crime" value="80" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Documentary" value="99" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Drama" value="18" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Family" value="10751" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Fantasy" value="14" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="History" value="36" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Horror" value="27" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Music" value="10402" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Mystery" value="9648" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Romance" value="10749" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Science Fiction" value="878" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="TV Movie" value="10770" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Thriller" value="53" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="War" value="10752" inline/>
            <Form.Check className="modal-genre-checkbox"type="checkbox" label="Western" value="37" inline/>
          </Form>
        </div>
        <Form>
          <Form.Check
            className="modal-theme-switcher-checkbox"
            type="switch"
            id="dark-theme-switch"
            label="Dark Mode"
            onChange={event => this.handleChange(event, "isDark")}
          />
        </Form>
      </div>
    );
  }
}

export default Sidebar;
