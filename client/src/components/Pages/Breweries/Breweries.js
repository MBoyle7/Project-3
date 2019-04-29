import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Form, Row, Col, Image, Button } from 'react-bootstrap';
import './Breweries.css'
import axios from 'axios';

export default class Wine extends Component {

    constructor(props) {
        super(props);
        this.state = {
          breweries: [],
          isLoaded: false,
        }
      }
    
      componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              breweries: json,
            })
          });
      }

    render() {

        var { isLoaded, breweries } =this.state;

        if(!isLoaded) {
        return <div>Loading...</div>;
        } 
        else {
            return (
                <Container>
                    <Jumbotron>
                        <h1>Breweries</h1>
                    </Jumbotron>
                    <h5>Search for your new favorite brewery here!</h5>
                    <Form.Control className="breweryInput" type="text" placeholder="Search here..." />
                    <br/>
                    <Button type="submit">Submit</Button>
                    <br/>
                    {/* <div>
                        <ul>
                            {breweries.map(brewery => (
                                <li key={brewery.id}>
                                Name: {brewery.name} | City: {brewery.city}
                                </li>
                            ))};
                        </ul>
                    </div> */}
                </Container>
            )
        }
    }
}   