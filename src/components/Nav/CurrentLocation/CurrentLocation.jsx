import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Wrapper, style } from './CurrentLocationStyles.jsx';
import { getIconFrom } from './CurrentLocationData.jsx';

export default class CurrentLocation extends Component {
  componentDidMount() {
    const { currentLocation } = this.props;

    if (isEmpty(currentLocation)) {
      this.getUserLocation();
    }
  }

  getUserLocation = () => {
    const maxTimeout = 10000; // === 10 seconds
    navigator.geolocation.getCurrentPosition(this.success, this.err, {
      timeout: maxTimeout
    });
  };

  success = ({ coords }) => {
    this.props.fetchWeather(coords);
  };

  err = (errMsg) => {
    alert(`Seems like we can't get your location. Please try again.`);
  };

  render() {
    const { currentLocation } = this.props;

    if (isEmpty(currentLocation)) return <Wrapper>Loading</Wrapper>;

    const { name, description, temp } = currentLocation.weather;

    const Icon = getIconFrom(description);
    const StyledIcon = style(Icon);

    return (
      <Wrapper>
        {name} <StyledIcon size={25} />
        {temp}&deg;F
      </Wrapper>
    );
  }
}
