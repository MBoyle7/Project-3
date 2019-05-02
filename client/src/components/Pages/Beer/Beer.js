import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Beer.css'
import beerImg from "./../assets/beerImg.jpg"

export default class Beer extends Component {
    render() {
        return (
            <Container>
          
                <Image src= {beerImg} className="header-image parallax" />
                    <h2>Check out a list of your favorite beers here</h2>
                
            </Container>
        )
    }
}

