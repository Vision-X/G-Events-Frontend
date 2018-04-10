import React, { Component } from 'react';

class MapButton extends Component {
  render() {
    return (
      <div id="map-btn-component" class="flex-column">
        <h2>Map of the building</h2>
        <button type="button">MAP</button>
      </div>
    );
  }
};

export default MapButton;
