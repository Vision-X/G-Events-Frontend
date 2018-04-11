import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventButton extends Component {
  render() {
    return (
      // <div id="event-btn-component" className="flex-column">
      //   <h2>Events at Galvanize</h2>
      //   <Link to="/events"><button type="button" to="/events">EVENTS</button></Link>
      // </div>
      <div className="landing-btns mx-auto">
        <Link to="/events"><button type="button" className="landing btn-lg btn-primary">GALVANIZE EVENTS</button></Link>
      </div>
    );
  }
};


export default EventButton;
