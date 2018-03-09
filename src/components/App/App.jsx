import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppStyles, { Wrapper } from './AppStyles'; // global styles that apply on import
import Nav from '../../containers/Nav';
import Dashboard from '../../containers/Dashboard';
import Forecast from '../../containers/Forecast';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/forecast" component={Forecast} />
        </Switch>
      </Wrapper>
    </MuiThemeProvider>
  </Router>
);

export default App;
