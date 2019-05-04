import React, { Component } from 'react'

import { Jumbotron, Container, Button, Form } from 'react-bootstrap'
import './Wine.css'
import Axios from 'axios'
import API from '../../../utils/API'

var wineName = ''
var beerURL = 'https://sandbox-api.brewerydb.com/v2/'
const apiKey = 'f1cd99daef522dc34a820c854fb10e79'
export default class Beer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beerInput: '',
      beers: [],
      isLoaded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount () {
  //   console.log('component mount')
  //   // "https://quiniwine.com"
  //   this.loadBeers()
  // }
  loadBeers = () => {
    API.getBeer().then(result => {
      console.log(result)
      this.setState({
        value: '',
        isLoaded: true,
        beers: result
      })
    })
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({ beerInput: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    API.getBeer(this.state.beerInput).then(response => {
      console.log(response)
      this.setState({ beerData: response.data })
      this.setState({ beerInput: '' })
    })
    // Axios.get(beerURL + apiKey + this.state.value)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       value: '',
    //       isLoaded: true,
    //       Wines: json
    //     })
    //   })
  }

  render () {
    const { isLoaded, beers } = this.state
    return (
      <Container>
        <Jumbotron>
          <h1>Beer</h1>
        </Jumbotron>
        <h5>Search for your new favorite beer here!</h5>
        <Form.Control
          className='beerInput'
          type='text'
          placeholder='Search here...'
        />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <br />
        {
          <div>
            <ul>
              {this.state.beers.map(beer => (
                <li key={beer.id}>Name: {beer.name}</li>
              ))}
            </ul>
          </div>
        }
      </Container>
    )
  }
}
