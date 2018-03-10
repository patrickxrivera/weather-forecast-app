import React from 'react';

import { Wrapper, TitleWrapper, Title } from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

const ForecastWrapper = ({ forecast, name, primaryColor, secondaryColor }) => (
  <div>
    <TitleWrapper>
      <Title color={primaryColor}> {name}</Title>
    </TitleWrapper>
    <Wrapper>
      {forecast.map((day) => (
        <ForecastItem
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          key={day.id}
          {...day}
        />
      ))};
    </Wrapper>
  </div>
);

export default ForecastWrapper;
