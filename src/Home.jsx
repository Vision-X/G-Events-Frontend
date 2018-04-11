import React, { Component } from 'react';
import EventButton from './EventButton.jsx';
import MapButton from './MapButton.jsx';
import Header from './Header.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <EventButton />
        <MapButton />
      </div>
    )
  }
};

export default Home;
