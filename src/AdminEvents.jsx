import React, { Component } from 'react';
// import Header from './Header.jsx';
import EventForm from './EventForm';

class AdminEvents extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getEvents() {
        const url = "https://g-events-api.herokuapp.com/events";
        let dataGrab = (response) => {
            this.setState({ data: response });
        };
        return fetch(url)
            .then(response => response.json())
            .then(dataGrab)
            .catch()
    }

    componentWillMount() {
        this.getEvents();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Events Admin Panel</h1>
                </div>
                <EventForm />
                {this.state.data.map(eventInfo => {
                    return (
                        <div className="event-detail-card content event-form">
                            <div className="grid grid--gutters title-block">
                                <div className="event-detail-block">
                                    <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                                        <div>
                                            <label>Month:</label>
                                            <input type="text" defaultValue={eventInfo.month} />
                                            <label>Day:</label>
                                            <input type="text" defaultValue={eventInfo.day} />

                                        </div>
                                        <div>
                                            <label>Event Title:</label>
                                            <input type="text" name="Event Title" defaultValue={eventInfo.title} />
                                        </div>
                                        <label>Time:</label>
                                        <input type="text" name="time" defaultValue={eventInfo.time} />
                                        <hr></hr>
                                        <label>Event Category:</label>
                                        <input type="text" name="category" defaultValue={eventInfo.category} />
                                        <hr></hr>
                                        <label>Location:</label>
                                        <input type="text" defaultValue={eventInfo.location} />
                                        <label>Address:</label>
                                        <input type="text" defaultValue="1644 Platte Street, Denver, CO 80202" />
                                        <label>Room:</label>
                                        <input type="text" name="room" />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea type="text" name="Event Description" defaultValue={eventInfo.description} />
                                        <input type="submit" value="Update Event" />
                                        <input type="submit" value="Delete Event" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                }
          </div>
        )
    }
};

export default AdminEvents;
