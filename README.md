# Project: G-Events Locator

## Deployment

Back-End: http://g-events-api.herokuapp.com

App: https://g-events-locator.firebaseapp.com


## Demo

[Demo Video](http://jmh-g-events-slide.surge.sh/g-events-demo-2.2.mp4)

## Description

A Galvanize Events Application - that allows the user to see a list of upcoming events with detailed information and directions to the event. The application has a floor map of all rooms with directions. Event admins may add and edit information such as event room location. With G-Events Locator, attendees can see a list of upcoming events, see the event details and have options to get directions to the venue as well as find the specific room/directions at that location - all from one app. Navigating G-Events has never been easier!

## Features

- The user is greeted with the G-Events page, this page will have an "events" button, and a "map" button.
- there is an admin page located at /admin

  Events link:
    - When the user clicks on the "events" button they will be redirected to a page with a list of upcoming events at the Platte Campus.
    - When a user clicks on an event, information is displayed, and a link to the the floor map with directions to the event room.

  Maps link:
    - When the user clicks on the map link, they are prompted to select a floor and room, a map is then displayed with directions to the selected room.

  Admin Page:
    - Shows a list of Events with edit and delete button for each event, plus an "add events" link at the bottom of the list.
      - Edit button allows to edit the event and save to the database
      - Add events link
        - Displays a list of events from the Galvanize website with an add button next to each event, by clicking add will add the event to the app's db.
        - Also has add a new event link, by clicking on this will open an add event form, with save button.

## License

MIT @2018

## Team

-- Jasen Hill (https://github.com/jasenmichael)

-- Michael Marlow (https://github.com/Vision-X)

-- Michael Smith (https://github.com/newcodesmith)

-- Owen Black (https://github.com/ohblack5280)

-- Roberto Santos (https://github.com/soundmedicine)

## Technologies

### Front-End:

1) React.js

2) Bootstrap || materialize

### Back End:

1) PostgresQL

2) Knex.js

3) Node

4) Express

5) Cheerio.js

---

# Daily Agenda

## Day 1

### Discussing Roles

Milo: comfortable with React, styling; interested in walking through back-end

Roberto: comfortable with React, down for anything, not big on styling, love back-end

Owen: down for pair programming, comfortable with React

Marlowe: solid with React, eye for design and detail; okay with back-end

Jasen: good eye for design and UX, strengths in back-end; down to get out of comfort zone with React.

### Day 1 Agenda

1. Review project phases

2. Landing page, marrying components

3. Review back-end code
    * Intro to Cheerio

4. Establish discussion protocol:
    * Eveyone has a chance to propose an idea, without interruption.

### Goals

1. Working Landing Page (per Phase 1)

2. Populate more of the phase board

## Day 2

### To Do's

Roberto: Went over finalizing concept for front end with Jasen, and I'm down for pair-programming the database.

Jasen: Take a look at scope for backend, try pair-programming. Create migration and test seed. Create the maps migration. Create the CRUD route to /events.

Marlow: Down for a code-along for setting up the database. Get map basics up and build on that. We need to do more pair-programming; open to tearing down the app and starting over.

Owen: We need to be more Agile to accomplish the goal of this group experience. More collaboration.

Milo: Open to anything. Frustrated about workflow seeming exclusive to one or two people, communication, roles.

* It would be beneficial to use Knex to build the database together.

### Workflow

Marlow: update scope, add details to Waffle.io

Jasen and Roberto: Pair program database.

Milo and Owen: Pair program front-end

## Day 3

### To Do's

1. Write queries

2. Update routes, troubleshoot

3. Style maps and manipulate responsive rendering

4. Integrate CRUD forms

### Workflow

Roberto: finish migrating and seeding Rooms, work on rooms routes

Jasen: update events queries and troubleshoot events routes

Marlow: work on CRUD froms

Milo: work with Marlow on forms, deploy front-end

Owen: quality analysis, styling

## Day 4

### To Do's

1. Form data, activate buttons
    * Add CRUD functionality to add events
    * more consistent behavior

2. Minor styling tweaks

3. Think about incorporating stretch feature

4. Think about presentation
    * compile technology
    * compile libraries

5. Update user stories

6. add testing


### Workflow

Milo: working on getting data from the forms and activating buttons in react framework

Roberto: update user stories

Owen: write tests

Marlow: getting POST request to work

Jasen: working on Maps-Rooms page

## Day 5

### To Do's

1. Integrate video demo into slideshow presentation

2. Create technologies-used slide

3. Discuss challenges slide

4. last-minute styling details

5. Review presentation flow

### Challenges

1. Figuring out the routes

2. POST request

3. Figuring out the group dynamic

4. Smoothing out the GitHub workflow

5. Using Google Maps library in React
