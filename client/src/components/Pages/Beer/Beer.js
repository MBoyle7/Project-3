import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Beer.css'
import beerimg from "../assets/beerImg.jpg"

export default class Beer extends Component {
    render() {
        return (
            <Container>
                <Image src= {beerimg} className="header-image parallax" />
                
            </Container>
        )
    }
}

// export default Beer.js