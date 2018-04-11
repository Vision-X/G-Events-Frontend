import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>G-Events Locator</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/maps">Maps</NavLink></li>
        </ul>
      </header>
    );
  }
};

export default Header;
