import React from 'react';
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

export default function RangeSlider() {

  const classes = useStyles();
  const [value, setValue] = React.useState([1980, 2020]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Date range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
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
