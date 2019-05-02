import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Liquor.css'

export default class Liquor extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                <div className="App">
         <h1>Tell us About Your Most Recent Slug of Hooch</h1>
       </div>      
                </Jumbotron>
            </Container>
        )
    }
}