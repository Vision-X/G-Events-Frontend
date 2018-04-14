import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

const url = "https://g-events-api.herokuapp.com/rooms";

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
      if (event.target.textContent === 'Lower Level') {
        this.setState({mapImg: this.state.LLUrl});
      } else if (event.target.textContent === '3rd Floor') {
        this.setState({mapImg: this.state.L3Url});
      } else {
        this.setState({mapImg: this.state.L4Url});
      }
    }

  };

  render() {
    return (
      <div>

        <ToggleDisplay show={!this.state.mapImg}>
          <div>
            <div className="landing-btns mx-auto">
              <a href="#bottom"><button onClick={this._onClick} className="landing btn-primary basic-button">4th Floor</button></a>
            </div>
            <div className="landing-btns mx-auto">
              <a href="#bottom"><button onClick={this._onClick} className="landing btn-primary basic-button">3rd Floor</button></a>
            </div>
            <div className="landing-btns mx-auto">
              <a href="#bottom"><button onClick={this._onClick} className="landing btn-primary basic-button">Lower Level</button></a>
            </div>
          </div>
        </ToggleDisplay>

        <ToggleDisplay show={!this.state.mapImg == ''}>
          <div className="btn-group fixed-bottom}">
            <a href="#bottom"><button onClick={this._onClick} className="basic-button selected btn btn-secondary map-button">Lower Level</button></a>
            <a href="#bottom"><button onClick={this._onClick} className="basic-button btn btn-secondary map-button">3rd Floor</button></a>
            <a href="#bottom"><button onClick={this._onClick} className="basic-button btn btn-secondary map-button">4th Floor</button></a>
          </div>
        </ToggleDisplay>


        <div className="map-container">
          <img className="img-fluid" src={this.state.mapImg} alt="" />
        </div>

        <span id="bottom"></span>
      </div>
    )
  }
};

export default MapsPage;
