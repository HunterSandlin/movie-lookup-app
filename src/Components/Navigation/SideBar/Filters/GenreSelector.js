import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function GenreSelector (props) {

  const genres = ['Action', 'Adventure', 'Animation', 'Comedy', "Crime", "Documentary", "Drama", "Family", "Fantasy", "History" ,"Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];

  const handleChange = (event, newValue) => {
    props.setSidebarFilters("genres", newValue);
  }

  return (
    <Autocomplete
          multiple
          limitTags={3}
          id="multiple-limit-tags"
          onChange={handleChange}
          options={genres}
          renderInput={(params) => (
          <TextField className="autocomplete-input" {...params} variant="outlined" label="Genres"/>
        )}
      />
  )
}
