import React, { Component } from 'react';

import { Wrapper } from './ForecastWrapperStyles.jsx';
import ForecastItem from '../ForecastItem/ForecastItem.jsx';

export default class ForecastWrapper extends Component {
  componentDidMount() {
    this.prepareFetchForecast(); // TODO better name
  }

  prepareFetchForecast = () => {
    const { fetchForecast } = this.props;
    const { lat, lon } = this.props.currentLocation.weather;
    fetchForecast(lat, lon);
  };

  forecastHasntBeenFetched = (props) => {
    return props.currentLocation.forecast === undefined;
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
