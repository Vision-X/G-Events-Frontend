import React, { Component } from 'react';

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            EventInput: [],
            success: [],
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const EventInfo = {
            month: this.month.value,
            day: this.day.value,
            title: this.title.value,
            registerUrl: this.registerUrl.value,
            time: this.time.value,
            category: this.category.value,
            location: this.location.value,
            locationUrl: this.locationUrl.value,
            address: this.address.value,
            floor: this.floor.value,
            room: this.room.value,
            description: this.description.value,
        }
        const message = 'Your event was submitted!';
        this.setState({
            success: [message],
            EventInput: [EventInfo],
        });
        document.getElementById("event-input").reset();
    }
    render() {
        return (
            <div className="event-detail-card content event-form">
                <div className="grid grid--gutters title-block">
                    <div className="event-detail-block">
                        <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                            <h1>Add Event Here: </h1>
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
                            <input ref={(input) => this.location = input} type="text" name="Location"/>
                            <label>Location URL</label>
                            <input ref={(input) => this.locationUrl = input} type="text" name="Location URL"/>
                            <label>Address:</label>
                            <input ref={(input) => this.address = input} type="text" name="Address"/>
                            <label>Floor</label>
                            <input ref={(input) => this.floor = input} type="text" name="Floor"/>
                            <label>Room:</label>
                            <input ref={(input) => this.room = input} type="text" name="Room" />
                            <hr></hr>
                            <label>Event Description:</label>
                            <textarea ref={(input) => this.description = input} type="text" name="Event Description" />
                            <input type="submit" value="Add Event" />
                            <input type="submit" value="Clear Form" />
                            <p id="message">{this.state.success}</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputForm;