import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Wrapper } from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

export default class ForecastWrapper extends Component {
  componentWillReceiveProps(...props) {
    if (this.forecastHasntBeenFetched(...props)) {
      this.prepareFetchForecast(...props); // TODO better name
    }
  }

  forecastHasntBeenFetched = (nextProps) => {
    return nextProps.currentLocation.forecast === undefined;
  };

  prepareFetchForecast = (nextProps) => {
    const { fetchForecast } = nextProps;
    const { lat, lon } = nextProps.currentLocation.weather;
    fetchForecast(lat, lon);
  };

  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </Wrapper>
    );
  }
}
