import React from 'react';
import values from 'lodash/values';

import { OuterWrapper, CardWrapper } from './DashboardWrapperStyles';

const DashboardWrapper = (props) => {
  const { dashboard, ...rest } = props;

  return (
    <OuterWrapper>
      {values(dashboard).map((data) => {
        const { View, id } = data;
        const nextProps = { ...data, ...rest };

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
