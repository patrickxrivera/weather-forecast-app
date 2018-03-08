import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchForecast } from '../redux/modules/currentLocation';
import ForecastWrapper from '../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';

const mapStateToProps = (state) => ({
  currentLocation: state.root.currentLocation
});

export default withRouter(
  connect(mapStateToProps, { fetchForecast })(ForecastWrapper)
);
