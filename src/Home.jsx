import React, { Component } from "react";
import EventButton from "./EventButton.jsx";
import MapButton from "./MapButton.jsx";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <EventButton />
        <MapButton />
      </div>
    );
  }
}

export default Home;
