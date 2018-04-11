import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MapButton extends Component {
  render() {
    return (
      <Link to="/maps">
        <div className="landing-btns mx-auto">
            <button type="button" className="landing btn-lg btn-primary">FLOOR MAP</button>
        </div>
    </Link>
    );
  }
};

export default MapButton;
