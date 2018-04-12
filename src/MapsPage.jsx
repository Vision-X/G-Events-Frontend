import React, { Component } from 'react';
import Header from './Header.jsx';
import MapNav from './MapNav.jsx';

class MapsPage extends Component {
  constructor() {
    super();
    this.state = {
      mapData: []
    }
  }
 
  getMaps() {
    const url = "https://g-events-api.herokuapp.com/maps";
    let dataGrab = (response) => {
      this.setState({mapData: response});
      console.log(this.state.mapData);
      
    };
    return fetch(url)
          .then(response => response.json())
          .then(dataGrab)
          .catch()
  }

  componentWillMount() {
    this.getMaps();
  }

  render() {
    return (
      <div>
        <Header />
        <MapNav />
        <div className="map-container">
        {/* <img src= { this.state.mapData.LL[1]} alt=""/> */}
        </div>
      </div>
    )
  }
};

export default MapsPage;
