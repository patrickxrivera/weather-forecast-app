import React, { Component } from 'react';

import { Wrapper } from './CurrentLocationStyles.jsx';

export default class CurrentLocation extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.err, {
      timeout: 10000
    });
  }

  success = ({ coords }) => {
    console.log(this.props);
    const { fetchCurrentLocationWeather } = this.props;
    fetchCurrentLocationWeather(coords);
  };

  err = (errMsg) => {
    console.warn(errMsg);
  };

  render() {
    return <Wrapper>San Francisco, CA</Wrapper>;
  }
}
