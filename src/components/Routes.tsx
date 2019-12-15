import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
  </Router>
);
