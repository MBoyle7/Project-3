import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Form, Row, Col, Image } from 'react-bootstrap';
import './Breweries.css';
// import MapContainer from './Map';
// import { Map, style, initialCenter } from 'google-maps-react';
// import SimpleMap from './NewMap';
// import PleaseWork from './components/NewestMap';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

// function Map(){
//   const [selectedBrewery, setSelectedBrewery] = useState(null);
//   return(
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 39.099728, lng: -94.578568 }}
//     >
//       {/* {this.state.breweries.map((brewery) => (
//         <Marker 
//           key={brewery.id} 
//           position={{ 
//             lat: brewery.latitude, 
//             lng: brewery.longitude 
//           }} 
//           onClick={() => {
//             setSelectedBrewery(brewery);
//           }}
//         />
//       ))} */}
//     </GoogleMap>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class Breweries extends Component {

    constructor(props) {
        super(props);
        this.state = {
          search: "",
          breweries: [],
          isLoaded: false,
          value: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        this.loadBreweries();
      }

      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBUnMTpKitb5yUBmPgYTAo_27NJ4xtbCFg&callback=initMap")
        window.initMap = this.initMap;
      }

      loadBreweries = () => {
        fetch('https://api.openbrewerydb.org/breweries?by_name=' + this.state.value)
          .then(res => res.json())
          .then(json => {
            this.setState({
              value: '',
              isLoaded: true,
              breweries: json,
            })
          });
          
      }

      initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 39.099728, lng: -94.578568 },
          zoom: 7,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        })

        const infoWindow = new window.google.maps.InfoWindow();

        this.state.breweries.map(brewery => {
          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" className="firstHeading">' + brewery.name +'</h1>'+
          '<div id="bodyContent">'+
          '<p>Street: '+brewery.street+
          '<br/>'+
          'City: '+brewery.city+
          '<br/>'+
          'State: '+brewery.state+'</p>'+
          '<p>Website: <a href='+brewery.website_url+'>'+
          'Visit Here!</a></p>'+
          '</div>'+
          '</div>';
          console.log(brewery.name);

          var myLatlng = new window.google.maps.LatLng(parseFloat(brewery.latitude),parseFloat(brewery.longitude));

          var marker = new window.google.maps.Marker({
            position: myLatlng,
            map: map,
            title: brewery.name
          })
          console.log(brewery.latitude);

          marker.addListener('click', function() {

            // Change the content
            infoWindow.setContent(contentString)
    
            // Open An InfoWindow
            infoWindow.open(map, marker)
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

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch('https://api.openbrewerydb.org/breweries?by_name=' + this.state.value)
          .then(res => res.json())
          .then(json => {
            this.setState({
              value: '',
              isLoaded: true,
              breweries: json,
            }, this.renderMap())
            console.log(this.state.breweries);
          });
          // console.log(this.state.value);
      }

      // mapClicked(mapProps, map, clickEvent) {
      //   alert("Map has been clicked");
      // }

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
                    {/* <Input 
                      value={this.state.userSearch}
                      onChange={this.handleInputChange}
                      name="userSearch" 
                      placeholder="Search here..." 
                    /> */}
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        {/* Name: */}
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search here..." />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
                    {/* <FormBtn
                      // disabled={!(this.state.userSearch)}
                      onClick={this.handleFormSubmit}
                    >
                      Search
                    </FormBtn> */}
                    <br/>
                    <div>
                        <ul>
                            {breweries.map(brewery => (
                                <li key={brewery.id}>
                                  <a rel="noopener noreferrer" target="_blank" href={brewery.website_url}>{brewery.name}</a> | {brewery.city}, {brewery.state}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <br/>
                    {/* <MapContainer>
                      <GoogleMap
                        center={{ lat: breweries.lat, lng: breweries.lng }}
                      ></GoogleMap>
                      
                    </MapContainer> */}

                    {/* <div style={{ width: "80vh", height: "80vh" }}>
                      <WrappedMap
                        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBUnMTpKitb5yUBmPgYTAo_27NJ4xtbCFg'}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                      >
                        {this.state.breweries.map(brewery => (
                          console.log(brewery),
                          <Marker 
                            key={brewery.id} 
                            position={{ 
                              lat: brewery.latitude, 
                              lng: brewery.longitude 
                            }} 
                            // onClick={() => {
                            //   setSelectedBrewery(brewery);
                            // }}
                          />
                        ))}

                      </WrappedMap>
                    </div> */}
                    <div id="map">
                    </div>
                    
                </Container>
            )
        }
    }
}   

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUnMTpKitb5yUBmPgYTAo_27NJ4xtbCFg&callback=initMap"
async defer></script> */}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}