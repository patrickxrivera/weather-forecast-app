import React from 'react';

import { Wrapper, Title, Temp, style, IconWrapper } from './ForecastItemStyles';
import getIconFrom from '../../../utils/iconData.js';

const ForecastItem = ({
  date,
  temp,
  description,
  primaryColor,
  secondaryColor
}) => {
  const Icon = getIconFrom(description);
  const StyledIcon = style(Icon);

  return (
    <Wrapper primaryColor={primaryColor}>
      <Title>{date}</Title>
      <IconWrapper secondaryColor={secondaryColor}>
        <StyledIcon size={60} />
      </IconWrapper>
      <Temp>{temp}&deg;</Temp>
    </Wrapper>
  );
};

export default ForecastItem;
