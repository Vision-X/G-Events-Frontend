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
            time: this.time.value,
            category: this.category.value,
            location: this.location.value,
            address: this.address.value,
            room: this.room.value,
            details: this.details.value,
        }
        const message = 'Your event was submitted!';
        this.setState({
            success: [message],
            EventInput: [EventInfo],            
        });
        
    }

    render() {
        return (
            <div className="event-detail-card content event-form">
                <div className="grid grid--gutters title-block">
                    <div className="event-detail-block">
                        <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                            <h1>Add Event Here: </h1>
                            <div>
                                <label>Month:</label>
                                <input ref={(input) => this.month = input} type="text" name="Month" />
                                <label>Day:</label>
                                <input ref={(input) => this.day = input} type="text" Name="Day" />
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
                            <input ref={(input) => this.location = input} type="text" />
                            <label>Address:</label>
                            <input ref={(input) => this.address = input} type="text" />
                            <label>Room:</label>
                            <input ref={(input) => this.room = input} type="text" name="room" />
                            <hr></hr>
                            <label>Event Details:</label>
                            <textarea ref={(input) => this.details = input} type="text" name="Event Details" />
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