import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Carousel, Jumbotron, Image, Button, Form } from 'react-bootstrap'
import './Wine.css'
import Axios from 'axios'
import API from '../../../utils/API'
import {list,ListItem} from "../../../components/List";

var wineName = ''
var beerURL = 'https://sandbox-api.brewerydb.com/v2/'
const apiKey = 'f1cd99daef522dc34a820c854fb10e79'
export default class Beer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beerInput: '',
      beers: [],
      name:'',
      isLoaded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleChange (event) {
    event.preventDefault()
    this.setState({ beerInput: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    API.getBeer(this.state.beerInput).then(response => {
      console.log(response)
      this.setState({ beers: response.data })
      this.setState({ beerInput: '' })
    })

  }

  render () {
    const { isLoaded, beers } = this.state
    return (

      <div className="app-picture">

      

      <Carousel class ="carousel">
      
       <h1>What Care I How Time Advances? I Am Drinking Ale Today
       <br></br><br></br><br></br>
         ~Edgar Allen Poe
       </h1>
        <h1>He Was A Wise Man Who Invented Beer.
        <br></br><br></br><br></br>
          ~ Plato
          </h1>
      <h1>Beer Is Proof That God Loves Us And Wants Us To Be Happy
        <br></br><br></br><br></br>
        ~ Ben Franklin
      </h1>
    </Carousel>
  
      <Jumbotron>
       
        <h5>Search For Your New Favorite Beer Here!</h5>
       
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
                <ListItem key={beer._id}>
                 <Link to={"/beers/" + beer._id}>
                   <strong>
                      Style:
                     {beer.name}
                     <br></br>
                     Alcohol by Volume: 
        
                     {beer.abvMax}
                     <br></br>
                     IBU's:
                     {beer.ibuMax}
                     <br></br>
                     Brewery:
                     {beer.category.name}
                     Description: 
                     <br></br>
                     {beer.description}
                   </strong>
                 </Link>
               </ListItem>
              ))}
            </ul>
          </div>
          
        }
        
      </Jumbotron>
     
      </div>
      ) 
  }
}