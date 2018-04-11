import React, { Component } from 'react';
import Header from './Header.jsx';
import Event from './Event.jsx';

class EventsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  getEvents() {
    // const url = "https://g-events-api.herokuapp.com/";
    // let dataGrab = (response) => {
    //   this.setState({data: [response]});
    // };
    // return fetch(url)
    //       .then(response => response.json())
    //       .then(dataGrab)
    //       .catch()
  }

  componentWillMount() {
    console.log("will mount bruh");
    // this.getEvents();
    const dizzle =
    [
      {
      "month": "Apr",
      "Day": "11",
      "location": "Platte",
      "locationUrl": "https://www.galvanize.com/campuses/denver-platte",
      "title": " Data Science Immersive Info Session ",
      "registerUrl": "https://www.eventbrite.com/e/galvanize-data-science-information-session-denver-tickets-41126133372",
      "time": "Wednesday, 6:00pm - 8:00pm MDT",
      "category": "Data Science",
      "description": "Join us for a discussion about how to start a career in data science. You'll leave this event with a clear perspective and structured options for beginning your career in this quickly-growing field. You will also have a list of the best resources available to use to plan your studies with Galvanize!6:00pm: Meet and Greet. Free food and drinks provided!6:10pm: Course Overview, Application Process, and Financing Options7:00 - 7:30: Individual Question/Answer and Mingling. Chat with Instructors, Students, and Galvanize Staff.\n",
      "floor": "",
      "room": ""
      },
      {
      "month": "Apr",
      "Day": "11",
      "location": "Platte",
      "locationUrl": "https://www.galvanize.com/campuses/denver-platte",
      "title": " Learn to Code Learning Series ",
      "registerUrl": "https://www.eventbrite.com/e/intro-to-htmlcssjavascript-free-learning-series-beginners-welcome-tickets-41218960019",
      "time": "Wednesday, 6:00pm - 8:00pm MDT",
      "category": "Web Development",
      "description": "",
      "floor": "",
      "room": ""
      },
      {
      "month": "Apr",
      "Day": "11",
      "location": "Platte",
      "locationUrl": "https://www.galvanize.com/campuses/denver-platte",
      "title": " WordPress Developer Meetup ",
      "registerUrl": "https://www.meetup.com/DenverWordPress/",
      "time": "Wednesday, 6:00pm - 9:00pm MDT",
      "category": "Web Development",
      "description": "",
      "floor": "",
      "room": ""
      },
      {
      "month": "Apr",
      "Day": "11",
      "location": "Platte",
      "locationUrl": "https://www.galvanize.com/campuses/denver-platte",
      "title": " Denver All Things Data Meetup ",
      "registerUrl": "https://www.meetup.com/Denver-All-Things-Data/",
      "time": "Wednesday, 6:00pm - 9:00pm MDT",
      "category": "Data Science",
      "description": "This meetup is targeted towards individuals who use sophisticated tools to work with data or would like to learn how to use sophisticated tools to work with data. The meetup will include a regularly occurring study group, where members are encouraged to set aside some time for self-learning (after all, the best way to learn to code is by doing!), networking events, and the occasional lecture from industry experts. \n",
      "floor": "",
      "room": ""
      },
      {
      "month": "Apr",
      "Day": "12",
      "location": "Platte",
      "locationUrl": "https://www.galvanize.com/campuses/denver-platte",
      "title": " Colorado Open Source Operating System User Group ",
      "registerUrl": "https://www.meetup.com/Colorado-Open-Source-Operating-System-User-Group/",
      "time": "Thursday, 6:00pm - 9:00pm MDT",
      "category": "Data Science, Web Development",
      "description": "",
      "floor": "",
      "room": ""
      }
    ];
    this.setState({data: dizzle});
  }

  render() {
    return (
      <div>
        <Header />
          {this.state.data.map(evt => {
            let eventInfo = evt;
            console.log(evt, "each event");
            return (
              <div className="event-detail-card content">
                <div className="grid grid--gutters title-block">
                  <div className="event-detail-block">
                    <div className="box">
                      <h4 className="month">{eventInfo.month}</h4>
                      <h6 className="day">{eventInfo.Day}</h6>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <h1 className="title">{eventInfo.title}</h1>
                    <p className="time">
                      {eventInfo.time}
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid--gutters location-block">
                  <div className="grid-cell">
                    <p className="address">
                      <a href="#">
                        {eventInfo.location}
                      </a>
                      <p>1644 Platte Street</p>
                      <p>Denver, CO 80202</p>
                    </p>
                  </div>
                </div>
                <hr className="short"></hr>
                <div className="grid grid--gutters detail-block">
                  <div className="grid-cell">
                    <p className="details">
                      {eventInfo.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
};

export default EventsPage;
