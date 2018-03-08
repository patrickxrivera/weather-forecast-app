import React from 'react';

import AppStyles, { Wrapper } from './AppStyles.jsx'; // global styles that apply on import
import NavWrapper from '../Nav/NavWrapper/NavWrapper.jsx';

const App = () => (
  <Wrapper>
    <NavWrapper />
  </Wrapper>
);

export default App;
