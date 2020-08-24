import React from 'react';

import {Form} from "react-bootstrap";


export default function ThemeChanger() {

  return (
    <Form.Check
      type="switch"
      id="dark-theme-switch"
      label="Dark Mode"
    />
  )
}

