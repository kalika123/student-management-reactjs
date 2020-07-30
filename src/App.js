import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Institutions from './components/pages/Institutions';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div class="content">
          <Header />
          <div class="pages studman-card">
          <Router>
            <Switch>
              <Route path="/" component={Institutions} ></Route> 
              <Route path="/institutions" component={Institutions} ></Route> 
            </Switch>
          </Router>
          </div>
         

        </div>


      </div>

    </div>
  );
}

export default App;
