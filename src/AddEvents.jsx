import React, { Component } from 'react';

class AddEvents extends Component {
    constructor() {
        super();
        this.state = {
            eventData: []
        }
    }

    getEvents() {
        const url = "https://g-events-api.herokuapp.com/events/add";
        let eventDataGrab = (response) => {
            this.setState({ eventData: response });
        };
        return fetch(url)
            .then(response => response.json())
            .then(eventDataGrab)
            .catch()
    }

    componentWillMount() {
        this.getEvents();
    }

    render() {
        return (
            <div>
                {this.state.eventData.map(eventInfo => {
                    return (
                        <div key={eventInfo.day + eventInfo.title.length + 100} className="event-detail-card content event-form">
                            <div className="grid grid--gutters title-block">
                                <div className="event-detail-block">
                                    <h1>Galvanize Events</h1>
                                    <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                                        <label>Month:</label>
                                        <input ref={(input) => this.month = input} type="text" defaultValue={eventInfo.month} />
                                        <label>Day:</label>
                                        <input ref={(input) => this.day = input} type="text" defaultValue={eventInfo.day} />
                                        <label>Event Title:</label>
                                        <input ref={(input) => this.title = input} type="text" name="Event Title" defaultValue={eventInfo.title} />
                                        <label>Registration URL:</label>
                                        <input ref={(input) => this.registerUrl = input} type="text" name="Registration URL" />
                                        <label>Time:</label>
                                        <input ref={(input) => this.time = input} type="text" name="time" defaultValue={eventInfo.time} />
                                        <hr></hr>
                                        <label>Event Category:</label>
                                        <input ref={(input) => this.category = input} type="text" name="category" defaultValue={eventInfo.category} />
                                        <hr></hr>
                                        <label>Location:</label>
                                        <input ref={(input) => this.location = input} type="text" defaultValue={eventInfo.location} />
                                        <label>Location URL</label>
                                        <input ref={(input) => this.locationUrl = input} type="text" />
                                        <label>Address:</label>
                                        <input ref={(input) => this.address = input} type="text" />
                                        <label>Floor</label>
                                        <input ref={(input) => this.floor = input} type="text" />
                                        <label>Room:</label>
                                        <input ref={(input) => this.room = input} type="text" name="room" />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea ref={(input) => this.description = input} type="text" name="Event Description" defaultValue={eventInfo.description} />
                                        <input type="submit" value="Add Event" />
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

export default AddEvents;
