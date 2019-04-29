import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Members extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <Container>
        <Jumbotron>
          <h2>Welcome {currentUserName} to Booze App</h2>
          {/* <h3>Email: {currentUserEmail}</h3> */}
          <p>Find all your favorite spirits using our easy to use site.</p>
          <Link to="/">
            <Button bsstyle="primary">Home</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src="assets/beerImg.jpg"
              className="booze-pic"
              roundedCircle
            />
            <h3>Beer</h3>
            <p>Click here to find all of your favorite beers!</p>
          </Col>
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src="assets/wineImg.jpg"
              className="booze-pic"
              roundedCircle
            />
            <h3>Wine</h3>
            <p>Find your next favorite wine!</p>
          </Col>
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src="../assets/liquorImg.jpg"
              className="booze-pic"
              roundedCircle
            />
            <h3>Liquor</h3>
            <p>All of your favorite spirits in one place!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Members;
