import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Beer.css'

export default class Beer extends Component {
    render() {
        return (
            <Container>
                <Image src="assets/beerPageImg.jpeg" className="header-image parallax" />
                
            </Container>
        )
    }
}