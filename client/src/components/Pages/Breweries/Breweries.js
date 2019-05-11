import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Form, Row, Col, Image } from 'react-bootstrap'
import './Breweries.css'
import MapContainer from '../../map/Map'
import { Map, style, initialCenter } from 'google-maps-react'

export default class Breweries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      breweries: [],
      isLoaded: false,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.loadBreweries()
  }

  loadBreweries = () => {
    fetch('https://api.openbrewerydb.org/breweries?by_name=' + this.state.value)
      .then(res => res.json())
      .then(json => {
        this.setState({
          value: '',
          isLoaded: true,
          breweries: json
        })
      })
  }

  // handleInputChange = event => {
  //   console.log(event.target.value);
  //   const { search, value } = event.target;
  //   this.setState({
  //     [search]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.search);
  //   if (this.state.userSearch) {

  //     };
  //   }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault()
    fetch('https://api.openbrewerydb.org/breweries?by_name=' + this.state.value)
      .then(res => res.json())
      .then(json => {
        this.setState({
          value: '',
          isLoaded: true,
          breweries: json
        })
      })
    console.log(this.state.value)
  }

  mapClicked (mapProps, map, clickEvent) {
    alert('Map has been clicked')
  }

  render () {
    var { isLoaded, breweries } = this.state

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Container>
          <Jumbotron>
            <h1>Breweries</h1>
          </Jumbotron>
          <h5>Search For Your New Favorite Brewery Here!</h5>
          {/* <Input
                      value={this.state.userSearch}
                      onChange={this.handleInputChange}
                      name="userSearch"
                      placeholder="Search here..."
                    /> */}
          <form onSubmit={this.handleSubmit}>
            <label>
              {/* Name: */}
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                placeholder='Search here...'
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          {/* <FormBtn
                      // disabled={!(this.state.userSearch)}
                      onClick={this.handleFormSubmit}
                    >
                      Search
                    </FormBtn> */}
          <br />
          <div>
            <ul>
              {breweries.map(brewery => (
                <li key={brewery.id}>
                  <a rel='noopener noreferrer' target='_blank' href={brewery.website_url}>{brewery.name}</a> | {brewery.city}, {brewery.state}
                </li>
              ))}
            </ul>
          </div>
          <br />
          <MapContainer>

          </MapContainer>
        
        </Container>
      )
    }
  }
}
