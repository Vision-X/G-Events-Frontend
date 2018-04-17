import React, { Component } from "react";

class EditEvents extends Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
  }

  getFormData(e) {
    return {
      month: e.target.parentNode.querySelectorAll("input")[1].value,
      day: e.target.parentNode.querySelectorAll("input")[2].value,
      title: e.target.parentNode.querySelectorAll("input")[3].value,
      registerUrl: e.target.parentNode.querySelectorAll("input")[4].value,
      time: e.target.parentNode.querySelectorAll("input")[5].value,
      category: e.target.parentNode.querySelectorAll("input")[6].value,
      location: e.target.parentNode.querySelectorAll("input")[7].value,
      locationUrl: e.target.parentNode.querySelectorAll("input")[8].value,
      floor: e.target.parentNode.querySelectorAll("input")[9].value,
      room: e.target.parentNode.querySelectorAll("input")[10].value,
      description: e.target.parentNode.querySelectorAll("textarea")[0].value
    };
  }

  updateEventData(daData, theId) {
    let myData = JSON.stringify(daData);
    console.log(myData);
    let thisId = theId;
    console.log(thisId);
    let updateUrl = `https://g-events-api.herokuapp.com/events/${thisId}`;
    fetch(updateUrl, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: myData
    })
      .then(response => response.json())
      .then(response => {
        let message = document.querySelector("#message");
        message.textContent = "Your update was SUCKsessful!";
        setTimeout(() => {
          message.textContent = "";
        }, 4000);
      })
      .catch(err => console.log(err));
  }

  deleteEventData(theId) {
    let thisId = theId;
    let deleteUrl = `https://g-events-api.herokuapp.com/events/${thisId}`;
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).catch(err => console.log(err));
  }

  _onClick(e) {
    e.preventDefault();
    if (e.target.id === "update") {
      let theId = e.target.parentNode.querySelector(".event-id").value;
      let daData = this.getFormData(e);
      this.updateEventData(daData, theId);
    } else if (e.target.id === "delete") {
      let theId = e.target.parentNode.querySelector(".event-id").value;
      this.deleteEventData(theId);
    }
  }

  render() {
    let sortedEvents = this.props.data;
    var months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ];
    return (
      <div>
        {sortedEvents
          .sort(function(a, b) {
            let aMonth = a.month.toLowerCase().substring(0, 3);
            let bMonth = b.month.toLowerCase().substring(0, 3);
            if (aMonth == bMonth) {
              return a.day - b.day;
            }
            return months.indexOf(aMonth) - months.indexOf(bMonth);
          })
          .map(eventInfo => {
            return (
              <div className="event-detail-card content event-form">
                <div className="grid grid--gutters title-block">
                  <div className="event-detail-block">
                    <h1>DB Event</h1>
                    <form
                      className="event-input"
                      onClick={this._onClick}
                      onSubmit={e => this.onSubmit(e)}
                    >
                      <label>Event ID:</label>
                      <input
                        className="event-id"
                        ref={input => (this.id = input)}
                        type="text"
                        value={eventInfo.id}
                      />
                      <label>Month:</label>
                      <input
                        ref={input => (this.month = input)}
                        type="text"
                        defaultValue={eventInfo.month}
                      />
                      <label>Day:</label>
                      <input
                        ref={input => (this.day = input)}
                        type="text"
                        defaultValue={eventInfo.day}
                      />
                      <label>Event Title:</label>
                      <input
                        ref={input => (this.title = input)}
                        type="text"
                        name="Event Title"
                        defaultValue={eventInfo.title}
                      />
                      <label>Registration URL:</label>
                      <input
                        ref={input => (this.registerUrl = input)}
                        type="text"
                        name="Registration URL"
                      />
                      <label>Time:</label>
                      <input
                        ref={input => (this.time = input)}
                        type="text"
                        name="time"
                        defaultValue={eventInfo.time}
                      />
                      <hr />
                      <label>Event Category:</label>
                      <input
                        ref={input => (this.category = input)}
                        type="text"
                        name="category"
                        defaultValue={eventInfo.category}
                      />
                      <hr />
                      <label>Location:</label>
                      <input
                        ref={input => (this.location = input)}
                        type="text"
                        defaultValue={eventInfo.location}
                      />
                      <label>Location URL</label>
                      <input
                        ref={input => (this.locationUrl = input)}
                        type="text"
                      />
                      <label>Address:</label>
                      <input
                        ref={input => (this.address = input)}
                        type="text"
                        defaultValue="1644 Platte Street, Denver, CO 80202"
                      />
                      <label>Floor</label>
                      <input ref={input => (this.floor = input)} type="text" />
                      <label>Room:</label>
                      <input
                        ref={input => (this.room = input)}
                        type="text"
                        name="room"
                      />
                      <hr />
                      <label>Event Description:</label>
                      <textarea
                        ref={input => (this.description = input)}
                        type="text"
                        name="Event Description"
                        defaultValue={eventInfo.description}
                      />
                      <input id="update" type="submit" value="Update Event" />
                      <input id="delete" type="submit" value="Delete Event" />
                      <p id="message" />
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default EditEvents;
