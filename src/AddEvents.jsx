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
                        <div className="event-detail-card content event-form">
                            <div className="grid grid--gutters title-block">
                                <div className="event-detail-block">
                                    <h1>Galvanize Events</h1>
                                    <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                                        <label>Month:</label>
                                        <input ref={(input) => this.month = input} type="text" name="Month" />
                                        <label>Day:</label>
                                        <input ref={(input) => this.day = input} type="text" Name="Day" />
                                        <label>Event Title:</label>
                                        <input ref={(input) => this.title = input} type="text" name="Event Title" />
                                        <label>Registration URL:</label>
                                        <input ref={(input) => this.registerUrl = input} type="text" name="Registration URL" />
                                        <label>Time:</label>
                                        <input ref={(input) => this.time = input} type="text" name="Time" />
                                        <hr></hr>
                                        <label>Event Category:</label>
                                        <input ref={(input) => this.category = input} type="text" name="Category" />
                                        <hr></hr>
                                        <label>Location:</label>
                                        <input ref={(input) => this.location = input} type="text" name="Location" />
                                        <label>Location URL</label>
                                        <input ref={(input) => this.locationUrl = input} type="text" name="Location URL" />
                                        <label>Address:</label>
                                        <input ref={(input) => this.address = input} type="text" name="Address" />
                                        <label>Floor</label>
                                        <input ref={(input) => this.floor = input} type="text" name="Floor" />
                                        <label>Room:</label>
                                        <input ref={(input) => this.room = input} type="text" name="Room" />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea ref={(input) => this.description = input} type="text" name="Event Description" />
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
