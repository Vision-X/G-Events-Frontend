import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import EventButton from './EventButton.jsx';
import MapButton from './MapButton.jsx';
import EventsPage from './EventsPage.jsx';
import MapsPage from './MapsPage.jsx';
import Home from './Home.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    event.preventDefault();
    if (event.target.innerText === 'EVENTS') {
      console.log("clickkkkk, ayeeeeee");
    }
    if (event.target.innerText === 'MAPS') {
      console.log("noseddddddddd");
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App" onClick={this._onClick}>
          <Header />
            <div className="content">
              {/*    <EventButton />
              <Route exact path="/" component={Home} />
              <Route path="/events" component={EventsPage} />
              <Route path="/maps" component={MapsPage} />
              // <MapButton /> */}
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
