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
      console.log(this.state.mapData[0]['LL'].portraitMapUrl);
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
          <img src="http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorPortraitMap.png" alt=""/>
        </div>
      </div>
    )
  }
};

export default MapsPage;
