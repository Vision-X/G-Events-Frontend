import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventButton extends Component {
  render() {
    return (
      <div className="landing-btns mx-auto">
        <Link to="/events"><button type="button" className="landing btn-lg btn-primary basic-button">GALVANIZE EVENTS</button></Link>
      </div>
    );
  }
};


export default EventButton;
