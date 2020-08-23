import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Sidebar = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

  const classes = useStyles();

  const genres = ['Horror', 'Action'];


  return (
    <div className="sidenav">
      <div>SidebarTop</div>

       <Autocomplete
        multiple
        style={{fontSize: `5px !important`, height: '5px', width: 'auto', float: 'top'}}
        limitTags={2}
        id="multiple-limit-tags"
        options={genres}
        defaultValue={[genres[0]]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Genre" />
        )}
      />




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
