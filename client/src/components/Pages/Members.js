import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Members.css";
import winepic from './assets/wineImg.jpg'
import liqpic from './assets/BreweriesImg.jpg'
import beerpic from './assets/beerImg.jpg'
class Members extends Component {
  // state = {
  //   currentUserName: "",
  //   currentUserEmail: ""
  // };

  // componentDidMount() {
  //   const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
  //   this.setState({
  //     currentUserEmail: idToken.idToken.claims.email,
  //     currentUserName: idToken.idToken.claims.name
  //   });
  // }

  render() {
   
    // const { currentUserEmail, currentUserName } = this.state;

    return (
     <div className = "hopps">
      <Container>
        <Jumbotron>
          <h2>Welcome to BoozeIt!</h2>
          {/* <h3>Email: {currentUserEmail}</h3> */}
          <p>Find And Track Your Favorite Adult Beverages.</p>
          <Link to="/">
            <Button bsstyle="primary">Home</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src={winepic}
              className="booze-pic"
              roundedCircle
            />
            <Link to="Wine">
            <h3>Wine</h3>
            <p>Find Your Next Favorite Wine!</p>
            </Link>
          </Col>
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src={beerpic}
              className="booze-pic"
              roundedCircle
            />
            <Link to="wine">
            <h3>Beer</h3>
            <p>Click Here To Find Beers!</p>
            </Link>
          </Col>
          <Col xs={12} sm={4} className="pic-wrapper">
            <Image
              src= {liqpic}
              className="booze-pic"
              roundedCircle
            />
            <Link to ="breweries">
            <h3>Breweries</h3>
            <p>Locate a Brewery!</p>
            </Link>
          </Col>
        </Row>
      </Container>
        </div>
    )
  
  }
}

export default Members;
