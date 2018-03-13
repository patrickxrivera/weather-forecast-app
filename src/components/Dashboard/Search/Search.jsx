import React, { Component } from 'react';
import { func, string, number } from 'prop-types';

import { inputStyle, hintStyle, style, errorStyle } from './SearchStyles';
import { Wrapper } from './SearchStyles';
import TextField from 'material-ui/TextField';
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

  handleChange = ({ target: { value } }) => {
    try {
      const suggestions = suggest(value);
      console.log(suggestions);
      this.setState({ errorText: '' });
    } catch (err) {
      const errorText = 'Please enter a valid city';
      this.setState({ errorText });
    }

    this.setState({ searchVal: value });
  };

  handleSubmit = (payload, e) => {
    const { searchVal } = this.state;
    const newPayload = { ...payload, searchVal };
    const { fetchView, receiveCity } = this.props;

    receiveCity(newPayload); // add searchVal to reducer payload
    fetchView(payload);
  };

  isError = () => this.state.errorText !== '';

  render() {
    const { primaryColor, id } = this.props;
    const newView = 'Result';
    const payload = { id, newView };

    return (
      <Wrapper>
        <form
          onSubmit={(e) =>
            this.state.errorText
              ? e.preventDefault()
              : this.handleSubmit(payload)
          }
        >
          <TextField
            onChange={this.handleChange}
            errorText={this.state.errorText}
            hintText="Enter a city"
            inputStyle={inputStyle}
            hintStyle={hintStyle}
            errorStyle={errorStyle}
            style={style}
            underlineFocusStyle={{ borderColor: primaryColor }}
            autoFocus={true}
          />
        </form>
      </Wrapper>
    );
  }
}
