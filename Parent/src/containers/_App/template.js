import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import Dashboard from '../Dashboard/loadable';
import Mesh from '../Mesh/loadable';

// Styles
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-contents">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Mesh} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
