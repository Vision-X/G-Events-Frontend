import React, { Component } from 'react';

class MapNav extends Component {
    render() {
      return (
        <div className="btn-group">
          <button className="basic-button btn btn-secondary map-button">LL</button>
          <button className="basic-button btn btn-secondary map-button">L3</button>
          <button className="basic-button btn btn-secondary map-button">L4</button>
        </div>
      )
    }
}

export default MapNav;