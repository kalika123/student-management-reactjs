import React from 'react';
import './App.scss';
import Institutions from './components/pages/Institutions';
import Login from './components/pages/login/Login';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AppRoute from './components/utils/AppRoute';
import AuthLayout from './components/layouts/AuthLayout';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <AppRoute exact path="/" component={Institutions}></AppRoute>
            <AppRoute exact path="/login" component={Login} layout={AuthLayout}></AppRoute>
            <AppRoute exact path="/institutions" component={Institutions}></AppRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
