import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
// import { CSSTransitionGroup } from 'react-transition-group'


// const url = "https://g-events-api.herokuapp.com/rooms";
const LLlandscapeUrl = 'http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorLandscapeMap.png'
const L3landscapeUrl = 'http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorLandscapeMap.png'
const L4landscapeUrl = 'http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorLandscapeMap.png'
const LLportraitUrl = 'http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorPortraitMap.png'
const L3portraitUrl = 'http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorPortraitMap.png'
const L4portraitUrl = 'http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorPortraitMap.png'

class MapsPage extends Component {
  constructor() {
    super();
    this.state = {
      // mapData: [],
      Levels: {
        LLlandscapeUrl,
        LLportraitUrl,
        L3landscapeUrl,
        L3portraitUrl,
        L4landscapeUrl,
        L4portraitUrl,
        selectedPortraitMap: '',
        selectedLandscapeMap: '',
        selectedFloor: ''
      }
    };
    this._onClick = this._onClick.bind(this);
  };

  getMaps() {
    // let dataGrab = (response) => {
      // this.setState({mapData: response});
    this.setState({LLlandscapeUrl});
    this.setState({LLportraitUrl});
    this.setState({L3landscapeUrl});
    this.setState({L3portraitUrl});
    this.setState({L4landscapeUrl});
    this.setState({L4portraitUrl});
    this.setState({selectedPortraitMap: ''});
    this.setState({selectedLandscapeMap: ''});
    this.setState({selectedFloor: ''});
    // };
    // return fetch(url)
    //       .then(response => response.json())
    //       .then(dataGrab)
    //       .catch()
  };

  componentWillMount() {
    this.getMaps();
  };

  _onClick(event) {
    // if (event.target.type === 'submit') {
      if (event.target.textContent === 'Lower Level') {
        this.setState({selectedPortraitMap: this.state.LLportraitUrl});
        this.setState({selectedLandscapeMap: this.state.LLlandscapeUrl});
        this.setState({selectedFloor: 'LL'});
      } else if (event.target.textContent === '3rd Floor') {
        this.setState({selectedPortraitMap: this.state.L3portraitUrl});
        this.setState({selectedLandscapeMap: this.state.L3landscapeUrl});
        this.setState({selectedFloor: 'L3'});
      } else {
        this.setState({selectedPortraitMap: this.state.L4portraitUrl});
        this.setState({selectedLandscapeMap: this.state.L4landscapeUrl});
        this.setState({selectedFloor: 'L4'});
      }

    // }
    setTimeout(function(){
      var element = document.querySelector("#bottom");
      element.scrollIntoView();

    }, 300);

  };

  render() {
    return (
      <div>

        <ToggleDisplay show={!this.state.selectedPortraitMap}>
          <div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors btn-primary basic-button">4th Floor</button>
            </div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors btn-primary basic-button">3rd Floor</button>
            </div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors btn-primary basic-button">Lower Level</button>
            </div>
          </div>
        </ToggleDisplay>

        <ToggleDisplay show={!this.state.selectedPortraitMap == ''}>
          <div className="btn-group fixed-bottom}">
            <button onClick={this._onClick} className={"basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'LL') ? 'selected' : null)}>Lower Level</button>
            <button onClick={this._onClick} className={"basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'L3') ? 'selected' : null)}>3rd Floor</button>
            <button onClick={this._onClick} className={"basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'L4') ? 'selected' : null)}>4th Floor</button>

          </div>

        <div className="map-container">
          <img className="img-fluid portrait" src={this.state.selectedPortraitMap} alt="" />
          <div className="">
            <img className="img-fluid landscape" src={this.state.selectedLandscapeMap}  alt="" />
          </div>
        </div>

        </ToggleDisplay>

        <span id="bottom"></span>
      </div>
    )
  }
};

export default MapsPage;
