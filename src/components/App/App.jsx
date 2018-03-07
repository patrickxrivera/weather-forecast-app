import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppStyles, { Wrapper } from './AppStyles.jsx'; // global styles that apply on import
import NavWrapper from '../Nav/NavWrapper/NavWrapper.jsx';

const App = () => (
  <Wrapper>
    <NavWrapper />
  </Wrapper>
);

export default App;
