import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchForecast } from '../../redux/modules/currentLocation';

const ForecastEnhancer = (ComponentToWrap) => {
  class WrappedComponent extends Component {
    componentDidMount() {
      this.prepareFetchForecast(); // TODO better name
    }

    prepareFetchForecast = () => {
      const { fetchForecast } = this.props;
      const { name } = this.props;
      fetchForecast(name);
    };

    forecastHasntBeenFetched = (forecast) => {
      return forecast === undefined;
    };

    render() {
      const { forecast } = this.props;

      if (this.forecastHasntBeenFetched(forecast)) return <div>Loading</div>;

      return <ComponentToWrap forecast={forecast} />;
    }
  }

  return connect(null, { fetchForecast })(WrappedComponent);
};

export default ForecastEnhancer;
