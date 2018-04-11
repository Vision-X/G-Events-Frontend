import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand mx-auto mx-auto gorange" href="#">
                  <img src="http://jasenmichael.com/img/galvanize-logo.png" width="40" height="40" alt="gSchool logo" />
                </a>
              </div>
              <h3>Events Locator</h3>
            </div>
          </nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/maps">Maps</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
