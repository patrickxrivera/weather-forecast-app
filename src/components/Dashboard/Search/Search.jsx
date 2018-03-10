import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string, number } from 'prop-types';

import { inputStyle, hintStyle, style } from './SearchStyles';
import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';
import Result from '../Result/Result';

class Search extends Component {
  static propTypes = {
    id: number.isRequired,
    View: func.isRequired,
    primaryColor: string.isRequired,
    secondaryColor: string.isRequired,
    fetchPinWeather: func.isRequired,
    fetchView: func.isRequired,
    receiveCity: func.isRequired
  };

  state = {
    searchVal: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchVal: value });
  };

  handleSubmit = (payload, e) => {
    const { searchVal } = this.state;
    const { fetchView, receiveCity } = this.props;

    receiveCity({ ...payload, searchVal }); // add searchVal to reducer payload
    fetchView(payload);
  };

  renderTextField = ({ meta, color, input }) => {
    return (
      <TextField
        // {...input}
        // errorText={meta.error}
        autoFocus={true}
        hintText="Enter a city"
        onChange={this.handleChange}
        inputStyle={inputStyle}
        hintStyle={hintStyle}
        style={style}
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
