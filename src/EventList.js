import React, { Component } from "react";
import Event from "./Event";

import logo from "./mat/logo_large.png";

class EventList extends Component {
  render() {
    //Get Events from props
    const { events } = this.props;
    //Get Number of Events from App component
    // let numberOfEvents = this.props.numberOfEvents;
    //Modify the EventList by slicing the number of outputs
    // let customEvents = events.slice(0, numberOfEvents);

    return (
      <ul className='EventList'>
        <li key={"info"} className='event info-box'>
          <img className='logo-large' src={logo} alt='meet logo' />
          <h2>Meet App</h2>
          <p>
            <b>Stay informed about global coding events</b>
          </p>
          <p>Still wondering what coding events will be taking place next?</p>
        </li>
        <br />
        console.log(event)
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
