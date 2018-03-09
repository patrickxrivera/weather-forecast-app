import React from 'react';

import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';

const Search = ({ primaryColor }) => (
  <Wrapper>
    <TextField
      hintText="Enter a city"
      inputStyle={{ textAlign: 'center', fontSize: '20px' }}
      hintStyle={{ width: '300px', textAlign: 'center', fontSize: '20px' }}
      style={{ width: '300px', fontWeight: 'normal', fontSize: '20px' }}
      underlineFocusStyle={{ borderColor: primaryColor }}
    />
  </Wrapper>
);

export default Search;
