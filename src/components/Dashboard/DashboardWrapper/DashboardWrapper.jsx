import React from 'react';
import values from 'lodash/values';

import { OuterWrapper, CardWrapper } from './DashboardWrapperStyles';
import Pin from '../Pin/Pin';
import Search from '../Search/Search';

const DashboardWrapper = (props) => {
  const { dashboard, fetchView } = props;
  return (
    <OuterWrapper>
      {values(dashboard).map((data) => {
        const { View, id } = data;
        const nextProps = { ...data, fetchView };

        return (
          <CardWrapper>
            <View key={id} {...nextProps} />
          </CardWrapper>
        );
      })}
    </OuterWrapper>
  );
};

export default DashboardWrapper;
