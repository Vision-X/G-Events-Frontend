import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';

class Header extends Component {
  render() {
    return (
      <header className="fixed-top">
        <nav className="navbar">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand mx-auto mx-auto gorange">
                  <img src="http://jasenmichael.com/img/galvanize-logo.png" alt="gSchool logo" />
                </a>
              </div>
              <h3>Events Locator</h3>
            </div>
          </nav>

          <ToggleDisplay show={window.location.pathname !== "/"}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/maps">Maps</NavLink></li>
          </ul>
          </ToggleDisplay>

        </nav>
      </header>
    );
  }
};

export default Header;
