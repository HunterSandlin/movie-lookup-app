import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event, newValue) => {
    setSortBy(newValue.props.value);
    console.log(newValue.props.value);
    props.setSidebarFilters("sort", newValue.props.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          onChange={handleChange}
        >
          <MenuItem value={'popularity.asc'}>Popularity Asc</MenuItem>
          <MenuItem value={'popularity.desc'}>Popularity Desc</MenuItem>
          <MenuItem value={'primary_release_date.asc'}>Release Date Asc</MenuItem>
          <MenuItem value={'primary_release_date.desc'}>Release Date Desc</MenuItem>
          <MenuItem value={'original_title.asc'}>Original Title Asc</MenuItem>
          <MenuItem value={'original_title.desc'}>Original Title Desc</MenuItem>
          <MenuItem value={'vote_avgerage.asc'}>Vote Avg Asc</MenuItem>
          <MenuItem value={'vote_avgerage.desc'}>Vote Avg Desc</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}
