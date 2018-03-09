import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppStyles, { Wrapper } from './AppStyles'; // global styles that apply on import
import Nav from '../../containers/Nav';
import DashboardWrapper from '../Dashboard/DashboardWrapper/DashboardWrapper';
import Forecast from '../../containers/Forecast';

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={DashboardWrapper} />
        <Route path="/forecast" component={Forecast} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
