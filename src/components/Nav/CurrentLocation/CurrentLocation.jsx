import React, { Component } from 'react';

import { Wrapper } from './CurrentLocationStyles.jsx';

export default class CurrentLocation extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.err, {
      timeout: 10000
    });
  }

  success = ({ coords }) => {
    const { fetchCurrentLocationWeather } = this.props;
    fetchCurrentLocationWeather(coords);
  };

  err = (errMsg) => {
    console.warn(errMsg);
  };

  render() {
    const { weather } = this.props.currentLocation;

    if (!weather) return <Wrapper>Loading</Wrapper>;

    const { name, description, temp } = weather;

    return (
      <Wrapper>
        {name}: {temp}&deg;F
      </Wrapper>
    );
  }
}
