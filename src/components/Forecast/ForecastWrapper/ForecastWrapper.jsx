import React, { Component } from 'react';

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
    if (this.forecastHasntBeenFetched(this.props)) return <div>Loading</div>;

    const { forecast } = this.props.currentLocation;

    return (
      <Wrapper>
        {forecast.map((day) => {
          return <ForecastItem key={day.id} {...day} />;
        })};
      </Wrapper>
    );
  }
}
