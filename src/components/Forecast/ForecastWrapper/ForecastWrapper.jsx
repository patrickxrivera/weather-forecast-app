import React from 'react';

import { Wrapper } from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

const ForecastWrapper = () => (
  <Wrapper>
    <ForecastItem />
    <ForecastItem />
    <ForecastItem />
    <ForecastItem />
    <ForecastItem />
  </Wrapper>
);

export default ForecastWrapper;
