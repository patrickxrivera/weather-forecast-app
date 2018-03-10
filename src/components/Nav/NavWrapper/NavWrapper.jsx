import React from 'react';
import { object, func } from 'prop-types';

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

NavWrapper.propTypes = {
  currentLocation: object.isRequired, // empty unless user authorizes geolocation
  fetchWeather: func.isRequired,
  fetchForecast: func.isRequired
};

export default NavWrapper;
