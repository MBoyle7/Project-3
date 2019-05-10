import React, { Component } from 'react'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Navbar from './components/layout/Navbar'
import Home from './components/Pages/Home'
import Members from './components/Pages/Members'
import Login from './components/auth/Login'

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Wine from './components/Pages/Wine/Wine'

import Breweries from './components/Pages/Breweries/Breweries'
// import MyNavbar from './components/MyNavbar'
// import { isTemplateElement } from '@babel/types';

import './App.css'
class App extends Component {
  render () {
    return (
      <div className="app-container">
      <Router>
        <Security
          issuer='https://dev-122012.okta.com/oauth2/default'
          client_id='0oahjmwthXxO2IB8f356'
          redirect_uri='https://fierce-dusk-27663.herokuapp.com/implicit/callback'
          onAuthRequired={onAuthRequired}
        >
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Route path='/' exact component={Home} />
              <Route exact path='/' component={Home} />
              <SecureRoute path='/Members' exact component={Members} />
              <Route
                path='/login'
                render={() => (
                  <Login baseUrl='https://dev-122012.okta.com' />
                )}
              />
              

              <Route path='/wine' component={Wine} />

              <Route path='/breweries' component={Breweries} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
      </div>
    )
  }
}

export default App
