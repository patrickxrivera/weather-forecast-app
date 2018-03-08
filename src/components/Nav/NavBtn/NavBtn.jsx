import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Btn } from './NavBtnStyles.jsx';

export default class NavBtn extends Component {
  // handleClick = () => {
  //   const { fetchForecast } = this.props;
  //   const { lat, lon } = this.props.currentLocation.weather;
  //
  //   fetchForecast(lat, lon);
  // };

  render() {
    return (
      <div>
        <Link to="/forecast">
          <Btn>View Forecast</Btn>
        </Link>
      </div>
    );
  }
}
