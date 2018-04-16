import React, { Component } from 'react';

class EventsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  getEvents() {
    const url = "https://g-events-api.herokuapp.com/events";
    let dataGrab = (response) => {
      this.setState({ data: response });
    };
    return fetch(url)
      .then(response => response.json())
      .then(dataGrab)
      .catch()
  }

  componentWillMount() {
    this.getEvents();
  }

  render() {
    var dataObj = this.state.data;
    var months = ["jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec"];
    return (
      <div id="map-page">
        {dataObj.sort(function(a, b) {
          let aMonth = a.month.toLowerCase().substring(0,3);
          let bMonth = b.month.toLowerCase().substring(0,3);
          if (aMonth == bMonth) {
            return a.day - b.day
          }
          return months.indexOf(aMonth) - months.indexOf(bMonth)
        }).map(eventInfo => {
            return (
              <div id={eventInfo.id} className="event-detail-card content">
                <div className="grid grid--gutters title-block">
                  <div className="event-detail-block">
                    <div className="box">
                      <h4 className="month">{eventInfo.month.substring(0, 3)}</h4>
                      <h6 className="day">{eventInfo.day}</h6>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <h2 className="title">{eventInfo.title}</h2>
                    <p className="time">
                      {eventInfo.time}
                      <hr className="short"></hr>
                      <span>{eventInfo.category}</span>
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid--gutters location-block">
                  <div className="grid-cell">
                    <p className="address">
                      <h4>
                        {eventInfo.location}
                      </h4>
                      <p>1644 Platte Street</p>
                      <p>Denver, CO 80202</p>
                      <span><a target="_blank" href={eventInfo.registerUrl}>register here</a></span>
                    </p>
                  </div>
                </div>
                <hr className="short"></hr>
                <div className="grid grid--gutters detail-block">
                  <div className="grid-cell">
                    <p className="details">{eventInfo.description}</p>
                    <a href="/map/L4">4th Floor</a>
                    <a href="/map/2">Picachu - Room Directions</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
};

export default EventsPage;
