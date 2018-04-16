import React, { Component } from 'react';

class EditEvents extends Component {
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
                {this.state.data.map(eventInfo => {
                    return (
                        <div className="event-detail-card content event-form">
                            <div className="grid grid--gutters title-block">
                                <div className="event-detail-block">
                                    <h1>DB Event</h1>
                                    <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                                        <label>Event ID:</label>
                                        <input ref={(input) => this.id = input} type="text" value={eventInfo.id} />
                                        <label>Month:</label>
                                        <input ref={(input) => this.month = input} type="text" defaultValue={eventInfo.month} />
                                        <label>Day:</label>
                                        <input ref={(input) => this.day = input} type="text" defaultValue={eventInfo.day} />
                                        <label>Event Title:</label>
                                        <input ref={(input) => this.title = input} type="text" name="Event Title" defaultValue={eventInfo.title} />
                                        <label>Time:</label>
                                        <input ref={(input) => this.time = input} type="text" name="time" defaultValue={eventInfo.time} />
                                        <hr></hr>
                                        <label>Event Category:</label>
                                        <input ref={(input) => this.category = input} type="text" name="category" defaultValue={eventInfo.category} />
                                        <hr></hr>
                                        <label>Location:</label>
                                        <input ref={(input) => this.location = input} type="text" defaultValue={eventInfo.location} />
                                        <label>Address:</label>
                                        <input ref={(input) => this.address = input} type="text" defaultValue="1644 Platte Street, Denver, CO 80202" />
                                        <label>Room:</label>
                                        <input ref={(input) => this.room = input} type="text" name="room" />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea ref={(input) => this.details = input} type="text" name="Event Description" defaultValue={eventInfo.description} />
                                        <input type="submit" value="Update Event" />
                                        <input type="submit" value="Delete Event" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
};

export default EditEvents;
