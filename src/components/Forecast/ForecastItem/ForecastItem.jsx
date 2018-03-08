import React from 'react';

import { Wrapper, Title, StyledSun, Temp } from './ForecastItemStyles.jsx';

const ForecastItem = () => (
  <Wrapper>
    <Title>Mon</Title>
    <StyledSun size={60} />
    <Temp>73&deg;</Temp>
  </Wrapper>
);

export default ForecastItem;
