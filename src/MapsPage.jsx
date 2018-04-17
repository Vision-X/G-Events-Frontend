import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

const LLlandscapeUrl = './assets/maps/LL-PlatteFloorLandscapeMap.png'
const L3landscapeUrl = './assets/maps/L3-PlatteFloorLandscapeMap.png'
const L4landscapeUrl = './assets/maps/L4-PlatteFloorLandscapeMap.png'
const LLportraitUrl = './assets/maps/LL-PlatteFloorPortraitMap.png'
const L3portraitUrl = './assets/maps/L3-PlatteFloorPortraitMap.png'
const L4portraitUrl = './assets/maps/L4-PlatteFloorPortraitMap.png'

class MapsPage extends Component {
  constructor() {
    super();
    this.state = {
      roomsData: [],
      selectedPortraitMap: '',
      selectedLandscapeMap: '',
      selectedFloor: '',
      selectedFloorRooms: [],
      selectedRoom: '',
      roomsDisplayed: false
    };
    this._onClick = this._onClick.bind(this);
  };


  getRooms() {
    const roomsUrl = "http://localhost:3000/rooms"
    // const roomsUrl = "https://g-events-api.herokuapp.com/rooms"
    let dataGrab = (response) => {
      this.setState({roomsData: response.rooms});
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
        selectedFloorRooms.push(room)
      }
    })
    console.log(selectedFloorRooms);
    return this.setState({selectedFloorRooms})
  };

  getMapFromUrl(pathname) {
    console.log("from getMapFromUrl", pathname);
  }

  componentWillMount() {
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
            // console.log("hello");
          }))
      }
    }


    if (event.target.classList.contains('room')) {
      console.log("todo: change map and hide rooms list")
      this.setState({roomsDisplayed: false})
      const roomId = event.target.id
      let selectedRoom = ''
      // console.log(this.state.roomsData)
      this.state.selectedFloorRooms.forEach((room) => {
        // console.log(roomId);
        // console.log(room.id)

        if (room.id == roomId) {


          this.setState({selectedPortraitMap: room.roomMapPortraitUrl})
          this.setState({selectedLandscapeMap: room.roomMapLandscapeUrl})
          console.log(room.roomMapPortraitUrl)
        }
      })
      // return this.setState({selectedRoom})

    }
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
            <div className="room-list landing-btns mx-auto">
                {this.state.selectedFloorRooms.map(floorRoomName => {
                  return (
                    <button id={floorRoomName.id} key={floorRoomName.id} className="event-detail-card room mx-auto" onClick={this._onClick}>
                      <h3 className="room-link">{floorRoomName.name}</h3>
                    </button>
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
