import React, { Component } from 'react';
import { func, string, number } from 'prop-types';

import { inputStyle, hintStyle, style, errorStyle } from './SearchStyles';
import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import { suggest } from './helpers/helpers.js';

export default class Search extends Component {
  static propTypes = {
    id: number.isRequired,
    View: string.isRequired,
    primaryColor: string.isRequired,
    secondaryColor: string.isRequired,
    fetchDashboardWeather: func.isRequired,
    fetchView: func.isRequired,
    receiveCity: func.isRequired
  };

  state = {
    searchVal: '',
    errorText: ''
  };

  handleChange = (value) => {
    this.setState({ searchVal: value }, () => {
      try {
        this.isValidSearch();
      } catch (err) {
        this.setErrorText();
      }
    });
  };

  isValidSearch = () => {
    const { fetchSuggestions } = this.props;
    const { searchVal } = this.state;

    fetchSuggestions(searchVal);
    this.setState({ errorText: '' });
  };

  setErrorText = () => {
    const errorText = 'Please enter a valid city';
    this.setState({ errorText });
  };

  handleSubmit = (payload) => {
    const { searchVal } = this.state;
    const { fetchView, receiveCity } = this.props;

    receiveCity({ ...payload, searchVal }); // add searchVal to payload
    fetchView(payload);
  };

  render() {
    const { primaryColor, id, suggestions } = this.props;
    const nextView = 'Result';
    const payload = { id, nextView };

    return (
      <Wrapper>
        <form // could only get preventDefault to work using this format :(
          onSubmit={(e) =>
            this.state.errorText
              ? e.preventDefault()
              : this.handleSubmit(payload)
          }
        >
          <AutoComplete
            dataSource={this.props.suggestions}
            onUpdateInput={this.handleChange}
            onNewRequest={() => this.handleSubmit(payload)}
            errorText={this.state.errorText}
            hintText="Enter a city"
            inputStyle={inputStyle}
            hintStyle={hintStyle}
            errorStyle={errorStyle}
            style={style}
            underlineFocusStyle={{ borderColor: primaryColor }}
            autoFocus={true}
            fullWidth={true}
          />
        </form>
      </Wrapper>
    );
  }
}
