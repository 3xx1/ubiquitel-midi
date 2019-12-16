import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import Dashboard from '../Dashboard/loadable';

// Styles
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-contents">
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
