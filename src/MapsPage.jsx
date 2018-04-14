import React, { Component } from 'react';

class MapsPage extends Component {
  constructor() {
    super();
    this.state = {
      mapData: [],
      Levels: {
        LLUrl: '',
        L3Url: '',
        L4Url: '',
        mapImg: ''
      }
    };
    this._onClick = this._onClick.bind(this);
  };

  getMaps() {
    const url = "https://g-events-api.herokuapp.com/rooms";
    let dataGrab = (response) => {
      this.setState({mapData: response});
      this.setState({LLUrl: response.rooms[0].roomMapPortraitUrl});
      this.setState({L3Url: response.rooms[3].roomMapPortraitUrl});
      this.setState({L4Url: response.rooms[6].roomMapPortraitUrl});
    };
    return fetch(url)
          .then(response => response.json())
          .then(dataGrab)
          .catch()
  };

  componentWillMount() {
    this.getMaps();
  };

  _onClick(event) {
    if (event.target.type === 'submit') {
      if (event.target.textContent === 'LL') {
        this.setState({mapImg: this.state.LLUrl});
      } else if (event.target.textContent === 'L3') {
        this.setState({mapImg: this.state.L3Url});
      } else {
        this.setState({mapImg: this.state.L4Url});
      }
    }
  };

  render() {
    return (
      <div>
        <div className="button-group map-nav fixed-top">
          <a href="#bottom" className="basic-button btn btn-secondary map-button"><button onClick={this._onClick} className="basic-button btn btn-secondary map-button">LL</button></a>
          <a href="#bottom" className="basic-button btn btn-secondary map-button"><button onClick={this._onClick} className="basic-button btn btn-secondary map-button">L3</button></a>
          <a href="#bottom" className="basic-button btn btn-secondary map-button"><button onClick={this._onClick} className="basic-button btn btn-secondary map-button">L4</button></a>
        </div>
        <div className="map-container">
          <img className="img-fluid" src={this.state.mapImg} alt="" />
        </div>
        <a id="bottom"></a>
      </div>
    )
  }
};

export default MapsPage;
