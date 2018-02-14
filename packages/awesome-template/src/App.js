import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './routes/home'
import './icon.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} />}
            />
            <Route render={props => <Home {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
