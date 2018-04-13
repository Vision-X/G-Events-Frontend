import React, { Component } from 'react';
import Header from './Header.jsx';

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
    }
    this._onClick = this._onClick.bind(this);
  }

  getMaps() {
    const url = "https://g-events-api.herokuapp.com/maps";
    let dataGrab = (response) => {
      this.setState({mapData: response});
      console.log(this.state.mapData);
      this.setState({LLUrl: response[0]['LL'].portraitMapUrl})
      this.setState({L3Url: response[0]['L3'].portraitMapUrl})
      this.setState({L4Url: response[0]['L4'].portraitMapUrl})

      {/*    <img src={state.mapData[0]['LL'].portraitMapUrl} alt="" /> */}

    };
    return fetch(url)
          .then(response => response.json())
          .then(dataGrab)
          .catch()
  }

  componentWillMount() {
    this.getMaps();
  }

  _onClick(event) {
    if (event.target.type === 'submit') {
      if (event.target.textContent === 'LL') {
        console.log("lower level");
        this.setState({mapImage: this.state.LLUrl})
      } else if (event.target.textContent === 'L3') {
        console.log("level three");
        this.setState({mapImage: this.state.L3Url})
      } else {
        console.log("level four");
        console.log(this.state.L4Url);
        this.setState({mapImage: this.state.L4Url})
        // return (<img src={this.props.data['L4Url']})
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="btn-group">
          <button onClick={this._onClick} className="basic-button btn btn-secondary map-button">LL</button>
          <button onClick={this._onClick} className="basic-button btn btn-secondary map-button">L3</button>
          <button onClick={this._onClick} className="basic-button btn btn-secondary map-button">L4</button>
        </div>
        <div className="map-container">
          <img className="img-fluid" src={this.state.mapImage} alt="" />
        </div>
      </div>
    )
  }
};

export default MapsPage;
