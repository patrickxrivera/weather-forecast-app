import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Wrapper,
  HeaderWrapper,
  Header,
  Middle,
  Gutter,
  StyledSun,
  CurrentTemp,
  Bottom
} from './ResultStyles.jsx';

const style = {
  marginBottom: 8,
  border: 'none'
};

const Result = ({ primaryColor, secondaryColor, city }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header primaryColor={primaryColor}>{city}</Header>
    </HeaderWrapper>
    <Middle>
      <StyledSun size={80} />
      <Gutter />
      <CurrentTemp>72&deg;</CurrentTemp>
    </Middle>
    <Bottom>High: 80&deg; | Low: 62&deg;</Bottom>
    <RaisedButton
      label="View Forecast"
      backgroundColor={secondaryColor}
      style={style}
    />
  </Wrapper>
);

export default Result;
