import { connect } from 'react-redux';

import ForecastEnhancer from './ForecastEnhancer';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';
import { fetchForecast } from '../../redux/dashboard/dashboard.js';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    forecast: state.dashboard[id].forecast,
    name: getName(state, id)
  };
};

const getName = (state, id) => state.dashboard[id].city;

export default connect(mapStateToProps, { fetchForecast })(
  ForecastEnhancer(ForecastWrapper)
);
