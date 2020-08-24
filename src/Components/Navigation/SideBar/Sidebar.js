import React from 'react';

import {Form} from "react-bootstrap";

import DatePicker from './Filters/DatePicker';
import GenreSelector from './Filters/GenreSelector';
import ThemeChanger from './Utils/ThemeChanger';
import UserRating from './Filters/UserRating';

const Sidebar = (props) => {

  return (
    <div className="sidenav">
      <Form>
        <DatePicker setSidebarFilters={props.setSidebarFilters}/>
        {/* <GenreSelector setSidebarFilters={props.setSidebarFilters}/>
        <UserRating setSidebarFilters={props.setSidebarFilters}/> */}

      </Form>
      <Form>
        <ThemeChanger />
      </Form>
    </div>
  );
}

export default Sidebar;
