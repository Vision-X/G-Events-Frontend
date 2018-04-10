import React, { Component } from 'react';

class EventButton extends Component {
  render() {
    return (
      <div id="event-btn-component" class="flex-column">
        <h2>Events at Galvanize</h2>
        <button type="button">EVENTS</button>
      </div>
    );
  }
};

export default EventButton;
