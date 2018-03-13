import React from 'react';

import {
  OuterWrapper,
  Wrapper,
  TitleWrapper,
  Title
} from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

const ForecastWrapper = ({ forecast, name, primaryColor, secondaryColor }) => (
  <OuterWrapper>
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
  </OuterWrapper>
);

export default ForecastWrapper;
