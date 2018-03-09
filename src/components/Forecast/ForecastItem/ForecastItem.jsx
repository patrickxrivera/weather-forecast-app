import React from 'react';

import { Wrapper, Title, Temp, style, IconWrapper } from './ForecastItemStyles';
import getIconFrom from '../../../utils/iconData.js';

const ForecastItem = ({ date, temp, description }) => {
  const Icon = getIconFrom(description);
  const StyledIcon = style(Icon);

  return (
    <Wrapper>
      <Title>{date}</Title>
      <IconWrapper>
        <StyledIcon size={60} />
      </IconWrapper>
      <Temp>{temp}&deg;</Temp>
    </Wrapper>
  );
};

export default ForecastItem;
