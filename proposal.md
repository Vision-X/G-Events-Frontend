# Group Project Proposal
  A Gavanize Events Application - that allows the user to see a list of upcoming events with information, and directions to the event.
  The application has a floor map of all rooms with directions.
  Event admins may add and edit information such as event room location.
  The application allows attendee to check-in.

## Group Members
Jasen Hill, Michael Smith, Owen Black, Michael Marlow

## Project Description
  Galvanize Events Page
  - provides a landing page for attendees to see information on upcoming events


## Problem statement
  - there is no check-in for Galvanize events.
  - there are no online floor maps for rooms.
  - there is no events listing with directions.

## How will your project solve this problem?
  - The application will provide a list of upcoming events with directions to the event.
  - This solves the problem of collecting check-in data manually.
  - This solves the problem of providing directions to specific rooms.

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
  - react.js
  - bootstrap.css or materialize.css
  - postgresql
  - knex.js
  - node and express
