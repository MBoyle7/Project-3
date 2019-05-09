import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import { withAuth } from '@okta/okta-react';
import "./Home.css";

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You Have Entered The Member Portal,{' '}
            <Link to="/Members">Click Here.</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            If You Are A Member, Please Sign In Below.
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login Or Sign Up
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-8">BoozeIt Members Login</h1>
          {mainContent}
        </div>
      );
    }
  }
);