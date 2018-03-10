import React from 'react';

import { Wrapper } from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

const ForecastWrapper = ({ forecast }) => (
  <Wrapper>
    {forecast.map((day) => {
      return <ForecastItem key={day.id} {...day} />;
    })};
  </Wrapper>
);

export default ForecastWrapper;
