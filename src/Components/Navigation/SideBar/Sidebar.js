import React from 'react';

import {Form} from "react-bootstrap";

import DatePicker from './Filters/DatePicker';
import GenreSelector from './Filters/GenreSelector';
import ThemeChanger from './Utils/ThemeChanger';

const Sidebar = () => {

  return (
    <div className="sidenav">
      <Form>
        <DatePicker />
        <GenreSelector />
      </Form>
      <Form>
        <ThemeChanger />
      </Form>
    </div>
  );
}

export default Sidebar;
