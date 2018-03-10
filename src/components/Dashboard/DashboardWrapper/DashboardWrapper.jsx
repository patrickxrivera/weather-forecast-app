import React from 'react';
import values from 'lodash/values';
import { func, shape, string, number } from 'prop-types';

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

DashboardWrapper.propTypes = {
  fetchPinWeather: func.isRequired,
  fetchView: func.isRequired,
  receiveCity: func.isRequired,
  dashboard: shape({
    id: number.isRequired,
    View: func.isRequired,
    primaryColor: string.isRequired,
    secondaryColor: string.isRequired
  })
};

export default DashboardWrapper;
