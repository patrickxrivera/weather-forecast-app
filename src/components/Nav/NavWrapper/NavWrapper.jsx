import React from 'react';

import Title from '../Title/Title.jsx';
import CurrentLocation from '../CurrentLocation/CurrentLocation.jsx';
import NavBtn from '../NavBtn/NavBtn.jsx';
import { Wrapper } from './NavWrapperStyles.jsx';

const NavWrapper = (props) => (
  <Wrapper>
    <Title />
    <CurrentLocation {...props} />
    <NavBtn {...props} />
  </Wrapper>
);

export default NavWrapper;
