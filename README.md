![alt meetLogo](https://github.com/danielvonboros/meet/blob/main/src/mat/meetLogo.png?raw=true)

<p>Coding events worldwide</p>

<hr>

### Description

Serverless, Progressive Web Application with React developed using test-driven-development techniques.
The Application accesses Event components via the Google Calendar API and was developed around the idea of various testing stages:

<ul>
<li>Unit Testing</li>
<li>Integration Testing</li>
<li>Acceptance Testing</li>
<li>End-to-End-Testing</li>
</ul>

### Tools used

| Property            | Tool                |
| ------------------- | ------------------- |
| Language            | JavaScript          |
| Library             | React               |
| Route handling      | axios               |
| Styling Components  | Material            |
| Charts              | ReCharts            |
| Serverless          | AWS Lambda          |
| Authentication      | Google              |
| API                 | Google Calendar API |
| Test suites         | -----------------   |
| Unit Testing        | Jest                |
| Integration Testing | Jest                |
| Acceptance Testing  | Jest-Cucumber       |
| End-to-End-Testing  | Puppeteer           |

### Dependencies

<ul>
<li>axios</li>
<li>jest-cucumber</li>
<li>react</li>
<li>react-dom</li>
<li>recharts</li>
<li>web-vitals</li>
<li>enzyme</li>
<li>prettier</li>
<li>puppeteer</li>
</ul>

### User stories

<ul>
<li>As a user, I would like to be able to filter events by city so that I can see the list of events
that take place in that city.</li>
<li>As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.</li>
<li>As a user, I would like to be able to specify the number of events I want to view in the
app so that I can see more or fewer events in the events list at once.</li>
<li>As a user, I would like to be able to use the app when offline so that I can see the events
I viewed the last time I was online.</li>
<li>As a user, I would like to be able to add the app shortcut to my home screen so that I
can open the app faster.</li>
<li>As a user, I would like to be able to see a chart showing the upcoming events in each
city so that I know what events are organized in which city.</li>
</ul>

### Application functions

The Meet Application provides a list of Calendar events fetched from the Google Calendar API. Users can authenticate with their Google-Account to get access to the Application. The Application meets PWA standards and can be downloaded on both desktop and mobile devices.
The Application provides serverless functions (AWS lambda) and works both online and offline.

### Run the Application

All you have to do to run the application is to head to:

<a href="https://danielvonboros.github.io/meet">This Page</a>, go through the Google Authorization process and have fun accessing the page.
Because the Application is meant to work as a PWA, there's no further tools needed thn just your browser to access the application.

### App structure

```
    meet

    App
    |_  WelcomeScreen
    |
    |_  NavBar
    |   |_  CitySearch
    |   |_  NumberOfEvents
    |
    |_  EventList
    |   |_  EventGenre
    |   |_  Event
    |
    |_  InfoAlert
    |_  ErrorAlert
    |_  WarningAlert

```

### Contact me!

Get in touch! Contact me <a href="https://linkedin.com/in/daniel-von-boros-92878a186">here</a> to talk about collaborations.
