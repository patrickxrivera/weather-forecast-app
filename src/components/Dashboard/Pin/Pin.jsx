import React from 'react';
import { func, string, number } from 'prop-types';

import { OuterWrapper, ContentWrapper } from './PinStyles';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Pin = ({ id, primaryColor, secondaryColor, fetchView }) => {
  const newView = 'Search';
  const payload = { id, newView };

  return (
    <OuterWrapper secondaryColor={secondaryColor}>
      <ContentWrapper>
        Pin a city{' '}
        <FloatingActionButton
          onClick={() => fetchView(payload)}
          backgroundColor={primaryColor}
          mini={true}
        >
          <ContentAdd fill="#52565F" />
        </FloatingActionButton>
      </ContentWrapper>
    </OuterWrapper>
  );
};

Pin.propTypes = {
  id: number.isRequired,
  primaryColor: string.isRequired,
  secondaryColor: string.isRequired,
  fetchView: func.isRequired
};

export default Pin;
