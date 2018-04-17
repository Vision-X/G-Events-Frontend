import React, { Component } from "react";

class EventsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getEvents() {
    const url = "https://g-events-api.herokuapp.com/events";
    let dataGrab = response => {
      this.setState({ data: response });
    };
    return fetch(url)
      .then(response => response.json())
      .then(dataGrab)
      .catch();
  }

  componentWillMount() {
    this.getEvents();
  }

  render() {
    var dataObj = this.state.data;
    var months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ];
    return (
      <div id="map-page">
        {dataObj
          .sort(function(a, b) {
            let aMonth = a.month.toLowerCase().substring(0, 3);
            let bMonth = b.month.toLowerCase().substring(0, 3);
            if (aMonth === bMonth) {
              return a.day - b.day;
            }
            return months.indexOf(aMonth) - months.indexOf(bMonth);
          })
          .map(eventInfo => {
            return (
              <div id={eventInfo.id} className="event-detail-card content">
                <div className="grid grid--gutters title-block">
                  <div className="event-detail-block">
                    <div className="box">
                      <h4 className="month">
                        {eventInfo.month.substring(0, 3)}
                      </h4>
                      <h6 className="day">{eventInfo.day}</h6>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <h2 className="title">{eventInfo.title}</h2>
                    <p className="time">{eventInfo.time}</p>
                    <span className="category">{eventInfo.category}</span>
                  </div>
                  <div>
                    <a
                      className="event-page-button"
                      target="_blank"
                      href={eventInfo.registerUrl}
                    >
                      Register Here
                    </a>
                  </div>
                </div>
                <hr />
                <div className="grid grid--gutters location-block">
                  <div className="grid-cell">
                    <h4>Event Description</h4>
                    <p className="details">{eventInfo.description}</p>
                  </div>
                </div>
                <hr className="short" />
                <div className="grid grid--gutters detail-block">
                  <div className="grid-cell">
                    <div className="address">
                      <a target="_blank" href={eventInfo.locationUrl}>
                        {eventInfo.location}
                      </a>
                      <p>1644 Platte Street</p>
                      <p>Denver, CO 80202</p>
                      <p>Floor: {eventInfo.floor}</p>
                      <p>Room: {eventInfo.room}</p>
                    </div>
                    <div>
                      <a
                        className="map-link event-page-button"
                        href="/maps/${eventInfo.floor}"
                      >
                        Floor Map
                      </a>
                      <a
                        className="map-link event-page-button"
                        href="/maps/${eventInfo.room}"
                      >
                        Room Map
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="short" />
              </div>
            );
          })}
      </div>
    );
  }
}

export default EventsPage;
