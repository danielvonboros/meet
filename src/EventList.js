import React, { Component } from "react";
import Event from "./Event";
import EventGenre from "./EventGenre";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import logo from "./mat/meetLogo.png";

class EventList extends Component {
  render() {
    //Get Events from props
    const { events } = this.props;
    //Get Number of Events from App component
    let numberOfEvents = this.props.numberOfEvents;
    //Modify the EventList by slicing the number of outputs
    let customEvents = events.slice(0, numberOfEvents);

    return (
      <ul className="EventList">
        <li key={"info"} className="event info-box">
          <img className="logo-large" src={logo} alt="meet logo" />
          <h2>Meet App</h2>
          <p>
            <b>Stay informed about global coding events</b>
          </p>
          <p>Still wondering what coding events will be taking place next?</p>
        </li>
        <br />
        <li className="event info-box">
          <div className="data-vis-wrapper">
            <EventGenre events={events} />
            <ResponsiveContainer height={400}>
              <ScatterChart
                height={400}
                width="70%"
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 20,
                  left: 10,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis type="number" dataKey="number" name="number of events" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.props.data} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </li>
        <br />
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
