import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function UserRating(props) {

  const classes = useStyles();
  const [value, setValue] = useState([5, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setSidebarFilters("rating", newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        User Ratings
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={10}
        steps={1}
        marks={marks}
      />
    </div>
  );
}
