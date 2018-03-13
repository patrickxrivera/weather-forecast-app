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
    // try {
    //   const suggestions = suggest(value);
    //   this.setState({ errorText: '' });
    // } catch (err) {
    //   const errorText = 'Please enter a valid city';
    //   this.setState({ errorText });
    // }
    this.setState({ searchVal: value }, () => {
      const { getSuggestions } = this.props;
      getSuggestions(this.state.searchVal);
    });
  };

  handleSubmit = (payload, e) => {
    const { searchVal } = this.state;
    const newPayload = { ...payload, searchVal };
    const { fetchView, receiveCity } = this.props;

    receiveCity(newPayload);
    fetchView(payload);
  };

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
          <AutoComplete
            dataSource={this.props.suggestions}
            onUpdateInput={this.handleChange}
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
