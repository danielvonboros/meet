import React, { Component } from "react";
import Event from "./Event";
import { mockData } from "./mock-data";

class EventList extends Component {
  render() {
    // console.log(this);

    //Get Events from props
    const { events } = this.props;
    //Get Number of Events from App component
    let numberOfEvents = this.props.numberOfEvents;
    //Modify the EventList by slicing the number of outputs
    let customEvents = events.slice(0, numberOfEvents);
    return (
      <ul className="EventList">
        {customEvents.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
