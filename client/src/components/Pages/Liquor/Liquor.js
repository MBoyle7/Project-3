import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Liquor.css'

export default class Liquor extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    liquor
                </Jumbotron>
            </Container>
        )
    }
}