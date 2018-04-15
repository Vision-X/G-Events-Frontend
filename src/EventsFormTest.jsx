import React, { Component } from 'react';
// import Preview from './Preview';


class EventForm extends Component {
    constructor() {
        super();
        this.state = {
            EventInput: [],
            success: [],
        };
    }
}

    onSubmit(e) {
        e.preventDefault();
        const event = {
            month: this.title.value,
            day: this.day.value,
            title: this.title.value,
            time: this.time.value,
            category: this.category.value,
            location: this.location.value,
            address: this.address.value,
            room: this.room.value,
            details: this.details.value,
        }
        this.props.addEvent(event);
        this.InputForm.reset();

    };


render() {
    return (
        <div className="event-detail-card content event-form">
            <div className="grid grid--gutters title-block">
                <div className="event-detail-block">
                    <form ref={(input) => this.InputForm = input} id="event-input" >
                        <label>Add Event Here: </label>
                        <div>
                            <label>Month:</label>
                            <input ref={(input) => this.month = input} type="text" name="Month" />
                            <label>Day:</label>
                            <input ref={(input) => this.day = input} type="text" name="Day" />
                        </div>
                        <div>
                            <label>Event Title:</label>
                            <input ref={(input) => this.title = input} type="text" name="Event Title" />
                        </div>
                        <label>Time:</label>
                        <input ref={(input) => this.time = input} type="text" name="time" />
                        <hr></hr>
                        <label>Event Category:</label>
                        <input ref={(input) => this.category = input} type="text" name="category" />
                        <hr></hr>
                        <label>Location:</label>
                        <input ref={(input) => this.location = input} type="text" name="Location" />
                        <label>Address:</label>
                        <input ref={(input) => this.address = input} type="text" name="Address" />
                        <label>Room:</label>
                        <input ref={(input) => this.room = input} type="text" name="Room" />
                        <hr></hr>
                        <label>Event Details:</label>
                        <textarea ref={(input) => this.details = input} type="text" name="Event Details" />
                        <input type="submit" value="Add Event" onSubmit={(e) => this.onSubmit(e)} />
                        <input type="submit" value="Clear Form" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EventForm;