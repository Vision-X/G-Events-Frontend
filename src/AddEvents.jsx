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
                                        <input type="text" defaultValue={eventInfo.month} />
                                        <label>Day:</label>
                                        <input type="text" defaultValue={eventInfo.day} />
                                        <label>Event Title:</label>
                                        <input type="text" name="Event Title" defaultValue={eventInfo.title} />
                                        <label>Time:</label>
                                        <input type="text" name="time" defaultValue={eventInfo.time} />
                                        <hr></hr>
                                        <label>Event Category:</label>
                                        <input type="text" name="category" defaultValue={eventInfo.category} />
                                        <hr></hr>
                                        <label>Location:</label>
                                        <input type="text" defaultValue={eventInfo.location} />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea type="text" name="Event Description" defaultValue={eventInfo.description} />
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
