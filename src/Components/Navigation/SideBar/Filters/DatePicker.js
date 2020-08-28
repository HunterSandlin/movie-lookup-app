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
    value: 1900,
    label: '1900',
  },
  {
    value: 1940,
    label: '1940',
  },
  {
    value: 1980,
    label: '1980',
  },
  {
    value: 2020,
    label: '2020',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {

  const classes = useStyles();
  const [value, setValue] = useState([1900, 2020]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setSidebarFilters("date", newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Date Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1900}
        max={2020}
        marks={marks}
      />
    </div>
  );
}
