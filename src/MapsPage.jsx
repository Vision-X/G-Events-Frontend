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
      roomsData: [],
      // Levels: {
      // LLlandscapeUrl,
      // LLportraitUrl,
      // L3landscapeUrl,
      // L3portraitUrl,
      // L4landscapeUrl,
      // L4portraitUrl,
      selectedPortraitMap: '',
      selectedLandscapeMap: '',
      selectedFloor: '',
      selectedFloorRooms: [],
      selectedRoom: 'LL',
      roomsDisplayed: false
      // }
    };
    this._onClick = this._onClick.bind(this);
  };

  // getMaps() {
  //   this.setState({LLlandscapeUrl});
  //   this.setState({LLportraitUrl});
  //   this.setState({L3landscapeUrl});
  //   this.setState({L3portraitUrl});
  //   this.setState({L4landscapeUrl});
  //   this.setState({L4portraitUrl});
  //   this.setState({selectedPortraitMap: ''});
  //   this.setState({selectedLandscapeMap: ''});
  //   this.setState({selectedFloor: ''});
  // };

  getRooms() {
    const roomsUrl = "https://g-events-api.herokuapp.com/rooms"
    let dataGrab = (response) => {
      // console.log(response);
      this.setState({roomsData: response.rooms});
        // console.log(this.state.roomsData);
    };
    return fetch(roomsUrl)
          .then(response => response.json())
          .then(dataGrab)
          .catch()
  };

  getFloorRooms(floor) {
    console.log(floor);
    let selectedFloorRooms = []
    this.state.roomsData.forEach((room) => {
      if (room.level === floor) {
        // console.log(room);
        selectedFloorRooms.push(room)
      }
    })
    console.log(selectedFloorRooms);
    return this.setState({selectedFloorRooms})
  };

  getMapFromUrl(pathname) {
    console.log("from getMapFromUrl", pathname);
    // if /maps in srting
    //     trim /maps,
    //     then check to see floor or room exist
    //     if floor or room exist set map
    //     else set url to maps  -- > window.location = '/maps'
  }

  componentWillMount() {
    // this.getMaps();
    this.getRooms();
  };

  _onClick(event) {
    if (event.target.type === 'submit') {
      if (event.target.textContent === 'Lower Level') {
        this.setState({selectedPortraitMap: LLportraitUrl});
        this.setState({selectedLandscapeMap: LLlandscapeUrl});
        this.setState({selectedFloor: 'LL'}, () => {
          this.getFloorRooms(this.state.selectedFloor);
          document.querySelector("#bottom").scrollIntoView();
        });
      } else if (event.target.textContent === '3rd Floor') {
        this.setState({selectedPortraitMap: L3portraitUrl});
        this.setState({selectedLandscapeMap: L3landscapeUrl});
        this.setState({selectedFloor: 'L3'}, () => {
          this.getFloorRooms(this.state.selectedFloor);
          document.querySelector("#bottom").scrollIntoView();
        });
      } else if (event.target.textContent === '4th Floor')  {
        this.setState({selectedPortraitMap: L4portraitUrl});
        this.setState({selectedLandscapeMap: L4landscapeUrl});
        this.setState({selectedFloor: 'L4'}, () => {
          this.getFloorRooms(this.state.selectedFloor);
          document.querySelector("#bottom").scrollIntoView();
        });
      } else if (event.target.textContent === 'Rooms')  {
        // toggle show rooms list

        // (!this.state.roomsDisplayed) ? (console.log("todo: toggle show rooms list")) & (console.log("todo: toggle show rooms list2")) : null
        // if
        (this.state.roomsDisplayed)
        ?
          (this.setState({roomsDisplayed: false}, () => {
            console.log(this.state.roomsDisplayed)
          }))
        // else
        :
          (this.setState({roomsDisplayed: true}, () => {
            console.log(this.state.roomsDisplayed)
          }))
      }
    }
    if (event.target.classList.contains('room')) {
      console.log("todo: change map and hide rooms list");
    }
    setTimeout(function(){
      // var element = document.querySelector("#bottom");
      // document.querySelector("#bottom").scrollIntoView();
    }, 2700);
    // console.log(this.state.selectedFloor);
    // this.getFloorRooms(this.state.selectedFloor);
  }

  render() {
    return (
      <div>

        {
          (window.location.pathname !== "/maps") ?
            (this.getMapFromUrl(window.location.pathname)) :
            null
        }

        <ToggleDisplay show={!this.state.selectedPortraitMap}>
          <div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors-lg btn-primary basic-button">4th Floor</button>
            </div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors-lg btn-primary basic-button">3rd Floor</button>
            </div>
            <div className="landing-btns mx-auto">
              <button onClick={this._onClick} className="floors-lg btn-primary basic-button">Lower Level</button>
            </div>
          </div>
        </ToggleDisplay>

        <ToggleDisplay show={(this.state.selectedPortraitMap) !== ''}>

          <div className="btn-group fixed-bottom}">
            <button onClick={this._onClick} className={"floors basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'LL') ? 'selected' : null)}>Lower Level</button>
            <button onClick={this._onClick} className={"floors basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'L3') ? 'selected' : null)}>3rd Floor</button>
            <button onClick={this._onClick} className={"floors basic-button btn btn-secondary map-button " + ((this.state.selectedFloor === 'L4') ? 'selected' : null)}>4th Floor</button>

            <div>
              <button onClick={this._onClick} className={"basic-button btn btn-secondary map-button rooms " + ((this.state.roomsDisplayed) ? 'selected' : null)}>Rooms</button>
            </div>

          </div>

          <div className="map-container">
            <img className="img-fluid portrait" src={this.state.selectedPortraitMap} alt="" />
            <div className="">
              <img className="img-fluid landscape" src={this.state.selectedLandscapeMap}  alt="" />
            </div>
          </div>
          {/* show if a floor is selected */}
          <ToggleDisplay show={this.state.roomsDisplayed}>
            <div className="room-list">
                {this.state.selectedFloorRooms.map(floorRoomName => {
                  return (
                    <div key={floorRoomName.id} className="event-detail-card room">
                      <h1 id={floorRoomName.id} onClick={this._onClick}>{floorRoomName.name}</h1>
                    </div>
                  )
                })
              }

            </div>
          </ToggleDisplay>



        </ToggleDisplay>

        <span id="bottom"></span>
      </div>
    )
  }
};

export default MapsPage;
