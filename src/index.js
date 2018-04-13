import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import EventsPage from './EventsPage.jsx';
import MapsPage from './MapsPage.jsx';
import Home from './Home.jsx';
import AdminEvents from './AdminEvents.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/events" component={ EventsPage } />
      <Route path="/maps" component={ MapsPage } />
      <Route path="/admin/events" component={ AdminEvents } />
    </div>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
