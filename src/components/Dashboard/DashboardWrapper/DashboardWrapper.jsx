import React from 'react';
import values from 'lodash/values';
import { func, shape, string, number } from 'prop-types';

import { OuterWrapper, CardWrapper } from './DashboardWrapperStyles';
import { componentMap } from './DashboardWrapperData';

const DashboardWrapper = (props) => {
  const { dashboard, ...rest } = props;

  return (
    <OuterWrapper>
      {values(dashboard).map((data) => {
        const { View, id } = data;
        const Component = componentMap[View];
        const nextProps = { ...data, ...rest };

        return (
          <CardWrapper key={id}>
            <Component {...nextProps} />
          </CardWrapper>
        );
      })}
    </OuterWrapper>
  );
};

DashboardWrapper.propTypes = {
  fetchView: func.isRequired,
  receiveCity: func.isRequired,
  dashboard: shape({
    id: number.isRequired,
    View: string.isRequired,
    primaryColor: string.isRequired,
    secondaryColor: string.isRequired
  })
};

export default DashboardWrapper;
