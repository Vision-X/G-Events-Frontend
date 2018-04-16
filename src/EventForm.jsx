import React, { Component } from 'react';

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            EventInput: [],
            success: []
        };
        this._onClick = this._onClick.bind(this);
    }

    getFormData() {
        return {
          month: this.month.value,
          day: this.day.value,
          title: this.title.value,
          time: this.time.value,
          category: this.category.value || '',
          location: this.location.value,
          locationUrl: this.locationUrl,
          floor: this.floor.value,
          room: this.room.value,
          description: this.description.value,
        }
      // var month = document.querySelector("#month");
      // var day = document.querySelector("#day");
      // var title = document.querySelector("#title");
      // var time = document.querySelector("#time");
      // var category = document.querySelector("#category");
      // var location = document.querySelector("#location");
      // var address = document.querySelector("#address");
      // var room = document.querySelector("#room");
      // var description = document.querySelector("#description")
      // var floor = document.querySelector("#floor")
      //
      // const data = new FormData(document.querySelector('#event-input'));
      // return {
      //   month: data.get(month),
      //   day: data.get(day),
      //   location: data.get(location),
      //   locationUrl: "https://www.galvanize.com/campuses/denver-platte",
      //   title: data.get(title),
      //   registerUrl: '',
      //   time: data.get(time),
      //   category: data.get(category),
      //   description: data.get(description),
      //   floor: data.get(floor),
      //   room: data.get(room)
      // };
    }

    postFormData() {
          const postUrl = 'https://g-events-api.herokuapp.com/events';
          // console.log(this.getFormData(), "postForm function");
          let myData = JSON.stringify(this.getFormData());
          console.log(myData, "myData");
          fetch(postUrl, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: myData
          })
            .then(response => response.json())
            .then(response => {

              let message = document.querySelector("#message");
              message.textContent = 'Your event was submitted!';
            })
            .catch(err => console.log(err));
    }


    _onClick(e) {
      console.log(e.target);
      console.log(e.target.id);
      if (e.target.id === 'add-event') {
        console.log("ready to Post...");
        this.getFormData();
        console.log(this.getFormData(), "form data to POST");
      }
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("onSubmit...  ", this.getFormData());
        this.postFormData();
        // console.log(e.target.id);
        // if (e.target.id === 'add-event') {
        //   console.log("add event buttn clicked");
        //   console.log(this.getFormData(), "freshhh form data ");
        //   this.getFormData();
        //   function postFormData() {
        //     const postUrl = 'https://g-events-api.herokuapp.com/events';
        //     fetch(postUrl, {
        //       method: "POST",
        //       header: {
        //         "Content-Type": "application/json"
        //       },
        //       body: JSON.stringify(this.getFormData())
        //     })
        //       .then(response => response.json())
        //       .then(response => {
        //         let message = 'Your event was submitted!';
        //       })
        //       .catch(err => console.log(err));
        //   }
        //   postFormData();

        // const EventInfo = {
        //     month: this.month.value,
        //     day: this.day.value,
        //     title: this.title.value,
        //     time: this.time.value,
        //     category: this.category.value,
        //     location: this.location.value,
        //     address: this.address.value,
        //     room: this.room.value,
        //     details: this.details.value,
        // }
        // const message = 'Your event was submitted!';
        // this.setState({
        //     success: [message],
        //     EventInput: [EventInfo],
        // });
    }

    render() {
        return (
            <div className="event-detail-card content event-form">
                <div className="grid grid--gutters title-block">
                    <div className="event-detail-block">
                        <form id="event-input" onClick={this._onClick} onSubmit={(e) => this.onSubmit(e)}>
                            <h1>Add Event Here: </h1>
                            <label>Month:</label>
                            <input id="month"ref={(input) => this.month = input} type="text" name="Month" />
                            <label>Day:</label>
                            <input id="day" ref={(input) => this.day = input} type="text" Name="Day" />
                            <label>Event Title:</label>
                            <input id="title" ref={(input) => this.title = input} type="text" name="Event Title" />
                            <label>Registration URL:</label>
                            <input id="register-url" ref={(input) => this.registerUrl = input} type="text" name="Registration URL" />
                            <label>Time:</label>
                            <input id="time" ref={(input) => this.time = input} type="text" name="time" />
                            <hr></hr>
                            <label>Event Category:</label>
                            <input id="category" ref={(input) => this.category = input} type="text" name="category" />
                            <hr></hr>
                            <label>Location:</label>
                            <input id="location" ref={(input) => this.location = input} type="text" />
                            <label>Location URL</label>
                            <input id="location-url" ref={(input) => this.locationUrl = input} type="text" name="Location URL"/>
                            <label>Address:</label>
                            <input id="address" ref={(input) => this.address = input} type="text" />
                            <label>Floor:</label>
                            <input id="floor" ref={(input) => this.floor = input} type="text" name="floor" />
                            <label>Room:</label>
                            <input id="room" ref={(input) => this.room = input} type="text" name="room" />
                            <hr></hr>
                            <label>Event Details:</label>
                            <textarea id="description" ref={(input) => this.description = input} type="text" name="Event Description" />
                            <input id="add-event" type="submit" value="Add Event" />
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
