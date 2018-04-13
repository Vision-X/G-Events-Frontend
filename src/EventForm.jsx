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
            <div className="event-detail-card content">
                <div className="grid grid--gutters title-block">
                    <div className="event-detail-block">
                        <form id="event-input" onSubmit={(e) => this.onSubmit(e)}>
                            <label>Add Event Here: </label>
                            <div>
                                <label>Month:</label>
                                <select id="month" name="month">
                                    <option value="Jan">January</option>
                                    <option value="Feb">February</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                                </select>
                                <label>Day:</label>
                                <select type="number" name="day" id="day">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div>
                                <label>Event Title:</label>
                                <input type="text" name="Event Title" />
                            </div>
                            <label>Time:</label>
                            <input type="time" name="time" />
                            <hr></hr>
                            <label>Location:</label>
                            <select id="location" name="location">
                                <option value="platte">Platte</option>
                                <option value="gt">Golden Triangle</option>
                            </select>
                            <label>Address:</label>
                            <select id="address" name="address">
                                <option value="1644 Platte St, Denver, CO 80202">1644 Platte St, Denver, CO 80202</option>
                                <option value="1062 Delaware St, Denver, CO 80204">1062 Delaware St, Denver, CO 80204</option>
                            </select>
                            <label>Room:</label>
                            <input type="text" name="room" />
                            <hr></hr>
                            <label>Event Details:</label>
                            <textarea type="text" name="Event Details" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputForm;