import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {Form} from "react-bootstrap";

import DatePicker from './Filters/DatePicker';
import GenreSelector from './Filters/GenreSelector';
import ThemeChanger from './Utils/ThemeChanger';
import UserRating from './Filters/UserRating';
import Sort from './Filters/Sort';


const Sidebar = (props) => {

  return (
    <div className="sidenav">
      <Form>
        <DatePicker setSidebarFilters={props.setSidebarFilters}/>
        <GenreSelector setSidebarFilters={props.setSidebarFilters}/>
        <UserRating setSidebarFilters={props.setSidebarFilters}/>
      </Form>
      <Form>
        <Sort setSidebarFilters={props.setSidebarFilters}/>
        <ThemeChanger />
      </Form>
    </div>
  );
}

export default Sidebar;