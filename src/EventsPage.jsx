import React, { Component } from 'react';
import Header from './Header.jsx';
import Event from './Event.jsx';
import EventForm from './EventForm';

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
      this.setState({data: response});
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
    return (
      <div>
        <Header />
          {this.state.data.map(eventInfo => {
            return (
              <div className="event-detail-card content">
                <div className="grid grid--gutters title-block">
                  <div className="event-detail-block">
                    <div className="box">
                      <h4 className="month">{eventInfo.month}</h4>
                      <h6 className="day">{eventInfo.day}</h6>
                    </div>
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
                      <p>1644 Platte Street</p>
                      <p>Denver, CO 80202</p>
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
          })
        }
      </div>
    )
  }
};

export default EventsPage;
