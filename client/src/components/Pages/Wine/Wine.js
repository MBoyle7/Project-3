import React, { Component } from 'react'

import { Jumbotron, Container, Form } from 'react-bootstrap'
import './Wine.css'

// var searchOptions = new wineDotCom.searchOptions(
//   'Sextant+Wheelhouse+Paso+Robles+Zinfandel'
// )
// searchOptions.filter.categories.push(
//   wineDotCom.categories['Wine Type']['Red Wine']
// )
// searchOptions.filter.categories.push(
//   wineDotCom.categories['Appellation']['Central Coast']
// )
// searchOptions.size = 5
var token = "05bd3e5306d43d741a06a939c5ea3dd27eaad377"
export default class Wine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wines: [],
      isLoaded: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    // "https://https://api.globalwinescore.com/search/"
    this.loadWines()
  }
  loadWines = () => {
    
    fetch(
      'https://https://api.globalwinescore.com/search/' + this.state.value)
      .then(res => res.json())
      .then(json => {
        this.setState({
          value: '',
          isLoaded: true,
          Wines: json
        })
      })
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()

    fetch('https://https://api.globalwinescore.com/search/' + this.state.value)
      .then(res => res.json())
      .then(json => {
        this.setState({
          value: '',
          isLoaded: true,
          Wines: json
        })
      })
    console.log(this.state.value)
  }

  render () {
    const { isLoaded, wines } = this.state
    return (
      <Container>
        <Jumbotron>
          <h1>Wine</h1>
        </Jumbotron>
        <h5>Search for your new favorite wine here!</h5>
      
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
              {wines.map(wine => (
                <li key={wine.id}>
                  Name: {wine.name} | City: {wine.city}
                </li>
              ))}
              ;
            </ul>
          </div>
        }
      </Container>
    )
  }
}
