import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-122012.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{clientId}'
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;
