import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';
import Result from '../Result/Result';

class Search extends Component {
  state = {
    searchVal: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchVal: value });
  };

  handleSubmit = (payload, e) => {
    const { searchVal } = this.state;
    const { fetchView, receiveSearch } = this.props;

    receiveSearch({ ...payload, searchVal }); // add searchVal to payload
    fetchView(payload);
  };

  renderTextField = ({ meta, color, input }) => {
    return (
      <TextField
        // {...input}
        autoFocus={true}
        hintText="Enter a city"
        onChange={this.handleChange}
        // errorText={meta.error}
        inputStyle={{ textAlign: 'center', fontSize: '20px' }}
        hintStyle={{ width: '300px', textAlign: 'center', fontSize: '20px' }}
        style={{ width: '300px', fontWeight: 'normal', fontSize: '20px' }}
        underlineFocusStyle={{ borderColor: color }}
      />
    );
  };

  render() {
    const { primaryColor, id } = this.props;
    const newView = Result;
    const payload = { id, newView };

    return (
      <Wrapper>
        <form onSubmit={() => this.handleSubmit(payload)}>
          <Field
            name="search"
            color={primaryColor}
            component={this.renderTextField}
          />
        </form>
      </Wrapper>
    );
  }
}

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
