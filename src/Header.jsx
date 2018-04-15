import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';

class Header extends Component {
  render() {
    return (
      <header className="fixed-top">
        <nav className="navbar">
          <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand mx-auto">
                  <img class="img-fluid" src="/assets/galvanize-logo-2.png" alt="gSchool logo" />
                </a>
              </div>
              <h3>Events Locator</h3>
            </div>
          </nav>

          <ToggleDisplay show={window.location.pathname !== "/"}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li className={((window.location.pathname === '/events') ? 'selected' : null)}>
              <NavLink to="/events">Events</NavLink>
              </li>
            <li className={((window.location.pathname === '/maps') ? 'selected' : null)}>
              <NavLink to="/maps">Maps</NavLink>
            </li>
          </ul>
          </ToggleDisplay>





        </nav>
      </header>
    );
  }
};

export default Header;
