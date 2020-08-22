import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div>SidebarTop</div>
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
