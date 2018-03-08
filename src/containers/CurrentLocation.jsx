import { connect } from 'react-redux';

import {
  fetchWeather,
  getCurrentWeather
} from '../redux/modules/currentLocation';
import CurrentLocation from '../components/Nav/CurrentLocation/CurrentLocation.jsx';

const mapStateToProps = ({ currentLocation }) => ({
  currentLocation
});

export default connect(mapStateToProps, { fetchWeather })(CurrentLocation);
