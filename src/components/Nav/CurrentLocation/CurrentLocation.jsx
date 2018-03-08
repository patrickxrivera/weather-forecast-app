import React, { Component } from 'react';

import { Wrapper, style } from './CurrentLocationStyles.jsx';
import { getIconFrom } from './CurrentLocationData.jsx';

export default class CurrentLocation extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.err, {
      timeout: 10000
    });
  }

  success = ({ coords }) => {
    this.props.fetchWeather(coords);
  };

  err = (errMsg) => {
    alert(`Seems like we can't get your location. Please try again.`);
  };

  render() {
    const { weather } = this.props.currentLocation;

    if (!weather) return <Wrapper>Loading</Wrapper>;

    const { name, description, temp } = weather;

    const Icon = getIconFrom(description);
    const StyledIcon = style(Icon);

    return (
      <Wrapper>
        {name} | <StyledIcon size={25} />
        {temp}&deg;F
      </Wrapper>
    );
  }
}
