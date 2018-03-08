import { connect } from 'react-redux';

import { fetchWeather, fetchForecast } from '../redux/modules/currentLocation';
import NavWrapper from '../components/Nav/NavWrapper/NavWrapper.jsx';

const mapStateToProps = ({ root }) => ({
  currentLocation: root.currentLocation
});

export default connect(mapStateToProps, { fetchWeather, fetchForecast })(
  NavWrapper
);
