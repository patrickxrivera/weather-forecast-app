import React, { Component } from 'react';
import { connect } from 'react-redux';

const ForecastEnhancer = (ComponentToWrap) => {
  class WrappedComponent extends Component {
    componentDidMount() {
      this.prepareFetchForecast(); // TODO better name
    }

    prepareFetchForecast = () => {
      const { name } = this.props;
      const { fetchForecast } = this.props;

      const id = this.getId(this.props);

      fetchForecast(name, id);
    };

    getId = (props) => props.match.params.id;

    forecastHasntBeenFetched = (forecast) => {
      return forecast === undefined;
    };

    render() {
      const { forecast } = this.props;

      if (this.forecastHasntBeenFetched(forecast)) return <div>Loading</div>;

      return <ComponentToWrap {...this.props} />;
    }
  }

  return connect()(WrappedComponent);
};

export default ForecastEnhancer;
