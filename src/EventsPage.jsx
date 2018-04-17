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
                      <br className="short"></br>
                      <span>{eventInfo.category}</span>
                    </p>
                  </div>
                </div>
                <br></br>
                <div className="grid grid--gutters location-block">
                  <div className="grid-cell">
                  <a target="_blank" href={eventInfo.registerUrl} class="btn btn-sm btn-outline-info">register here</a>
                    <h4>
                      {eventInfo.location}
                    </h4>

                    <hr></hr>
                    <div className="address">
                      <span>1644 Platte Street</span>
                      <span>Denver, CO 80202</span>
                      <br></br>

                    </div>
                  </div>
                </div>
                <hr className="short"></hr>
                <div className="grid grid--gutters detail-block">
                  <div className="grid-cell">
                    <p className="details">
                      {eventInfo.description}
                      <br></br>
                      <a href="/maps" className="btn btn-outline-secondary btn-sm">Floor Map</a>
                      <a href="/maps" className="btn btn-outline-secondary btn-sm">Directions</a>
                    </p>
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
