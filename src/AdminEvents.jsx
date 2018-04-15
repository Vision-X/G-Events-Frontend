import React, { Component } from 'react';
import AddEvents from './AddEvents.jsx';
import EditEvents from './EditEvents.jsx';
import EventForm from './EventForm';

class AdminEvents extends Component {
    render() {
        return (
            <div>
            <h1>Events Admin Panel</h1>
                <div>
                    <EventForm />
                </div>
                <div>
                    <h1>Live Events</h1>
                    <EditEvents />
                </div>
                <div>
                    <h1>Galvanize Events To Add</h1>
                    <AddEvents />
                </div>
            </div>
        )
    }
};

export default AdminEvents;
