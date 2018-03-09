import React from 'react';
import values from 'lodash/values';

import { OuterWrapper, CardWrapper } from './DashboardWrapperStyles';
import Pin from '../Pin/Pin';
import Search from '../Search/Search';

const DashboardWrapper = ({ dashboard }) => {
  return (
    <OuterWrapper>
      {values(dashboard).map((data) => {
        const { View, id } = data;
        return (
          <CardWrapper>
            <View key={id} {...data} />
          </CardWrapper>
        );
      })}
    </OuterWrapper>
  );
};

export default DashboardWrapper;
