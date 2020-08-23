import React, {useState} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const Sidebar = () => {
  const [genresSelected, setGenresSelected] = useState();
  const genres = ['Action', 'Adventure', 'Animation', 'Comedy', "Crime", "Documentary", "Drama", "Family", "Fantasy", "History" ,"Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];

  return (
    <div className="sidenav">
      <div>
        {/*Component for Genre*/}
        <Autocomplete
          multiple
          style={{fontSize: `5px !important`, height: '5px', width: 'auto', float: 'top'}}
          limitTags={2}
          id="multiple-limit-tags"
          onChange={(event, newValue) => {setGenresSelected(newValue);}}
          options={genres}
          renderInput={(params) => (
          <TextField className="autocomplete-input" {...params} variant="outlined" label="Genres"/>
        )}
      />
      </div>

      <Form>
        <Form.Check
          type="switch"
          id="dark-theme-switch"
          label="Dark Mode"
        />
      </Form>
    </div>
  );
}







export default Sidebar;
