import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import EventButton from './EventButton.jsx';
import MapButton from './MapButton.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EventButton />
        <MapButton />
      </div>
    );
  }
}

export default App;
