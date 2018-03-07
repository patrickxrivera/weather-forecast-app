import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentLocationWeather } from '../redux/modules/currentLocation';
import CurrentLocation from '../components/Nav/CurrentLocation/CurrentLocation.jsx';

export default connect(null, { fetchCurrentLocationWeather })(CurrentLocation);
