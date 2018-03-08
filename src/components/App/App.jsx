import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppStyles, { Wrapper } from './AppStyles.jsx'; // global styles that apply on import
import Nav from '../../containers/Nav.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import ForecastWrapper from '../Forecast/ForecastWrapper/ForecastWrapper.jsx';

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/forecast" component={ForecastWrapper} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
