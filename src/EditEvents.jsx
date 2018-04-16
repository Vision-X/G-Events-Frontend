import React, { Component } from 'react';

class EditEvents extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this._onClick = this._onClick.bind(this);
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

    getTheId(e) {
      let theId = this.id;
      return theId;
    }

    updateEventData(e) {
      e.preventDefault();
      // let theId = this.getTheId();
      // const updateUrl = "https://g-events-api.herokuapp.com/events" + theId;
    }

    deleteEventData(e) {
      e.preventDefault();
      const deleteUrl = "";
    }

    _onClick(e) {
      e.preventDefault();

      console.log(e.target.id, "this should say UPDATE or DELETE");
      if (e.target.id === 'update') {
        let daId = this.getTheId();
        console.log(daId);
        //run the update by id function
      } else if (e.target.id === 'delete') {
        //run the delete by id function
        let daId = this.getTheId();
        console.log(daId);
      }
    }

    componentWillMount() {
      this.getEvents();
    }

    render() {
        let sortedEvents = this.state.data;
        var months = ["jan", "feb", "mar", "apr", "may", "jun",
          "jul", "aug", "sep", "oct", "nov", "dec"];
        return (
            <div>
                {sortedEvents.sort(function(a, b) {
                  let aMonth = a.month.toLowerCase().substring(0,3);
                  let bMonth = b.month.toLowerCase().substring(0,3);
                  if (aMonth == bMonth) {
                    return a.day - b.day
                  }
                  return months.indexOf(aMonth) - months.indexOf(bMonth)
                }).map(eventInfo => {
                    return (
                        <div className="event-detail-card content event-form">
                            <div className="grid grid--gutters title-block">
                                <div className="event-detail-block">
                                    <h1>DB Event</h1>
                                    <form className="event-input" onClick={this._onClick} onSubmit={(e) => this.onSubmit(e)}>
                                        <label>Event ID:</label>
                                        <input ref={(input) => this.id = input} type="text" value={eventInfo.id} />
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
                                        <input ref={(input) => this.address = input} type="text" defaultValue="1644 Platte Street, Denver, CO 80202" />
                                        <label>Floor</label>
                                        <input ref={(input) => this.floor = input} type="text" />
                                        <label>Room:</label>
                                        <input ref={(input) => this.room = input} type="text" name="room" />
                                        <hr></hr>
                                        <label>Event Description:</label>
                                        <textarea ref={(input) => this.description = input} type="text" name="Event Description" defaultValue={eventInfo.description} />
                                        <input id="update" type="submit" value="Update Event" />
                                        <input id="delete" type="submit" value="Delete Event" />
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
