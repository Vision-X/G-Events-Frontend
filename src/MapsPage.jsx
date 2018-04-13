import React, { Component } from 'react';
import Header from './Header.jsx';
import MapNav from './MapNav.jsx';

class MapsPage extends Component {
  constructor() {
    super();
    this.state = {
      mapData: [],
      LLUrl: ''
    }
  }

  getMaps() {
    const url = "https://g-events-api.herokuapp.com/maps";
    let dataGrab = (response) => {
      this.setState({mapData: response});
      console.log(this.state.mapData);
      this.setState({fknUrl: response[0]['LL'].portraitMapUrl})
      console.log(this.state.fknUrl, "fknurl");

      {/*    <img src={state.mapData[0]['LL'].portraitMapUrl} alt="" /> */}

    };
    return fetch(url)
          .then(response => response.json())
          .then(dataGrab)
          .catch()
  }

  componentDidMount() {
    this.getMaps();
  }

  render() {
    return (
      <div>
        <Header />
        <MapNav />
        <div className="map-container">
          <img className="img-fluid" src={this.state.fknUrl} alt="" />
        </div>
      </div>
    )
  }
};

export default MapsPage;
