import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Btn } from './NavBtnStyles.jsx';

const NavBtn = () => (
  <div>
    <Link to="/forecast">
      <Btn>View Forecast</Btn>
    </Link>
  </div>
);

export default NavBtn;
