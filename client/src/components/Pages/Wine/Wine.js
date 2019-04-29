import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import './Wine.css'

// export default class Wine extends Component {
//     render() {
//         return (
//             <Container>
//                 wine
//             </Container>
//         )
//     }
// }

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { Jumbotron, Container, Form, Row, Col, Image, Button } from 'react-bootstrap';
// import './Breweries.css'

export default class Wine extends Component {

    constructor(props) {
        super(props);
        this.state = {
          wine: [],
          isLoaded: false,
        }
      }
    
      componentDidMount() {
        fetch('https://api.globalwinescore.com/search/')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              wine: json,
            })
          });
      }

    render() {

        var { isLoaded, wine } =this.state;

        if(!isLoaded) {
        return <div>Loading...</div>;
        } 
        else {
            return (
                <Container>
                    <Jumbotron>
                        <h1>Wine</h1>
                    </Jumbotron>
                    <h5>Search for your new favorite wine here!</h5>
                    <Form.Control className="wineInput" type="text" placeholder="Search here..." />
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