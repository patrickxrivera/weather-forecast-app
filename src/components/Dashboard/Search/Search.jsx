import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';
import Result from '../Result/Result';

const renderTextField = ({ meta, color, input }) => {
  return (
    <TextField
      // {...input}
      hintText="Enter a city"
      // errorText={meta.error}
      inputStyle={{ textAlign: 'center', fontSize: '20px' }}
      hintStyle={{ width: '300px', textAlign: 'center', fontSize: '20px' }}
      style={{ width: '300px', fontWeight: 'normal', fontSize: '20px' }}
      underlineFocusStyle={{ borderColor: color }}
    />
  );
};

const Search = ({ primaryColor, fetchView, id }) => {
  const newView = Result;
  const payload = { id, newView };

  return (
    <form onSubmit={() => fetchView(payload)}>
      <Wrapper>
        <Field name="search" color={primaryColor} component={renderTextField} />
      </Wrapper>
    </form>
  );
};

const validate = (values) => {
  const { search } = values;
  const errors = {};
  errors.search = getSearchError(search);
  return errors;
};

const getSearchError = (search) =>
  !search ? 'Please enter a city' : undefined;

export default reduxForm({
  form: 'SearchForm',
  validate
})(Search);
