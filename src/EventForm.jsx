import React, { Component } from 'react';
// import Preview from './Preview';


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
        const message = 'Your event was submitted!';
        const textField = this.refs.textField;
        textField.value = '';
        this.setState({
            success: [message],
            EventInput: [],
        });
    }

    render() {
        return (
            <div className="event-detail-card content event-form">
                <div className="grid grid--gutters title-block">
                    <div className="event-detail-block">
                        <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                            <label>Add Event Here: </label>
                            <div>
                                <label>Month:</label>
                                <input type="text" />
                                <label>Day:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Event Title:</label>
                                <input type="text" name="Event Title" />
                            </div>
                            <label>Time:</label>
                            <input type="text" name="time" />
                            <hr></hr>
                            <label>Event Category:</label>
                            <input type="text" name="category" />
                            <hr></hr>
                            <label>Location:</label>
                            <input type="text" />
                            <label>Address:</label>
                            <input type="text" />
                            <label>Room:</label>
                            <input type="text" name="room" />
                            <hr></hr>
                            <label>Event Details:</label>
                            <textarea type="text" name="Event Details" />
                            <input type="submit" value="Add Event" />
                            <input type="submit" value="Clear Form" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputForm;