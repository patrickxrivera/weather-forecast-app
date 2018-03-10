import React, { Component } from 'react';

import { OuterWrapper, ContentWrapper, Btn } from './PinStyles';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from '../Search/Search';

const Pin = ({ id, primaryColor, secondaryColor, fetchView }) => {
  const newView = Search;
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

export default Pin;
