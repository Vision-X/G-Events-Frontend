import React, { Component } from 'react';

class Event extends Component {
  render() {
    let eventInfo;
    // console.log(data, "fack");
    return (
      <div className="event-detail-card content">
        <div className="grid grid--gutters title-block">
          <div className="event-detail-block">
            <div className="box">
              <h4 className="month">{eventInfo.month}</h4>
              <h6 className="day">{eventInfo.day}</h6></div>
          </div>
          <div className="grid-cell">
            <h1 className="title">{eventInfo.title}</h1>
            <p className="time">
              {eventInfo.time}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="grid grid--gutters location-block">
          <div className="grid-cell">
            <p className="address">
              <a href="#">
                {eventInfo.location}
              </a>
              <br>1644 Platte Street</br>
              <br>Denver, CO 80202</br>
            </p>
          </div>
        </div>
        <hr className="short"></hr>
        <div className="grid grid--gutters detail-block">
          <div className="grid-cell">
            <p className="details">
              {eventInfo.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
};

export default Event;
