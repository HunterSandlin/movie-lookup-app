import React, {useState} from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function GenreSelector () {

  const [genresSelected, setGenresSelected] = useState();
  const genres = ['Action', 'Adventure', 'Animation', 'Comedy', "Crime", "Documentary", "Drama", "Family", "Fantasy", "History" ,"Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];

  return (
    <Autocomplete
          multiple
          style={{fontSize: `5px !important`, height: '5px', width: 'auto'}}
          limitTags={3}
          id="multiple-limit-tags"
          onChange={(event, newValue) => {setGenresSelected(newValue);}}
          options={genres}
          renderInput={(params) => (
          <TextField className="autocomplete-input" {...params} variant="outlined" label="Genres"/>
        )}
      />
  )
}
