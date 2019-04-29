import React, { Component } from 'react';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import Members from './components/Pages/Members';
import Login from './components/auth/Login';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Beer from './components/Pages/Beer/Beer'
import Wine from './components/Pages/Wine/Wine'
import Liquor from './components/Pages/Liquor/Liquor'
import Breweries from './components/Pages/Breweries/Breweries'
// import MyNavbar from './components/MyNavbar'
import { isTemplateElement } from '@babel/types';

import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <Security
        issuer="https://dev-122012.okta.com/oauth2/default" 
        client_id="0oahjmwthXxO2IB8f356"
        redirect_uri={window.location.origin + '/implicit/callback'}
        // onAuthRequired={onAuthRequired}
      >
      <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/Members" exact={true} component={Members} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-122012.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
      // <div className="App">
      //   <h1>Tell us About Your Most Recent Slug of Hooch</h1>
      // </div>
    );
  }

  // render() {
  //     return (
  //       <Router>
  //         <div>
  //           <Navbar />
  //           <Route exact path="/" component={Home} />
  //           <Route path="/beer" component={Beer} />
  //           <Route path="/wine" component={Wine} />
  //           <Route path="/liquor" component={Liquor} />
  //           <Route path="/Breweries" component={Breweries} />
  //         </div>
  //       </Router>
  //     );
  //   }
}

export default App;
