# Group Project Proposal: Galvanize Events Locator

## Team Members

Jasen Hill, Michael Smith, Owen Black, Michael Marlow

## Project Description

A Galvanize Events Application - that allows the user to see a list of upcoming events with detailed information and directions to the event. The application has a floor map of all rooms with directions.  Event admins may add and edit information such as event room location. With G-Events Locator, attendees can see a list of upcoming events, see the event details and have options to get directions to the venue as well as find the specific room/directions at that location - all from one app. Navigating G-Events has never been easier!

<!-- The application allows attendee to check-in. -->

## Problem statement

Attending a Galvanize event has its own challenges, which G-Events Locator intends to address. Simply knowing about the event is only one piece of the story; attendees still need a way of finding details on the event including the address and the corresponding room location within the building. With G-Events Locator, all the important details of the event are arranged together in a clear and useful manner so attendees can get to where they are going quickly with confidence.

  <!-- - there is no check-in for Galvanize events.
  - there are no online floor maps for rooms.
  - there is no events listing with directions. -->

## How will your project solve this problem?

G-Events Locator is a simple interface that serves up existing Galvanize event data from our database. Users will select the relevant event and see specific details about that event. If they need to find the building itself there will be an option to get directions. If they are unsure about where to find the room or event space a custom floor map of the building is provided to easily locate the event space in the building.

  <!-- - The application will provide a list of upcoming events with directions to the event.
  - This solves the problem of collecting check-in data manually.
  - This solves the problem of providing directions to specific rooms. -->

## Map the user experience

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

## What technologies do you plan to use?

### Front-End
  - react.js
  - bootstrap.css or materialize.css
  - Google Firebase

### Back End
  - postgresql
  - knex.js
  - node and express
  - Cheerio.js or another webscraping library
  - Heroku
