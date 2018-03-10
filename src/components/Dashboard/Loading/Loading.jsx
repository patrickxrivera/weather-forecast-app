import React from 'react';

import ReactLoading from 'react-loading';
import Wrapper from './LoadingStyles.jsx';

const Loading = ({ primaryColor }) => (
  <Wrapper>
    <ReactLoading
      delay={0}
      type={'bubbles'}
      color={primaryColor}
      height={100}
      width={100}
    />
  </Wrapper>
);

export default Loading;
