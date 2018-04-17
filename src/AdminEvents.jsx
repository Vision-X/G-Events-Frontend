import React, { Component } from "react";
import AddEvents from "./AddEvents.jsx";
import EditEvents from "./EditEvents.jsx";
import EventForm from "./EventForm";

class AdminEvents extends Component {
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

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <div>
        <h1 class="admin-heading">Events Admin Panel</h1>
        <div>
          <EventForm />
        </div>
        <div>
          <h1>Live Events</h1>
          <EditEvents data={this.state.data} />
        </div>
        <div>
          <h1>Galvanize Events To Add</h1>
          <AddEvents />
        </div>
      </div>
    );
  }
}

export default AdminEvents;
