import React from 'react';

import { Wrapper, Title, Temp, style } from './ForecastItemStyles';
import getIconFrom from '../../../utils/iconData.js';

const ForecastItem = ({ date, temp, description }) => {
  const Icon = getIconFrom(description);
  const StyledIcon = style(Icon);

  return (
    <Wrapper>
      <Title>{date}</Title>
      <StyledIcon size={60} />
      <Temp>{temp}&deg;</Temp>
    </Wrapper>
  );
};

export default ForecastItem;
