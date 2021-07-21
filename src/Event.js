import React, { Component } from "react";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: false,
    };
  }

  toggleDetails() {
    if (this.state.eventDetails === true) {
      this.setState({ eventDetails: false });
    } else {
      this.setState({ eventDetails: true });
    }
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <h2 className="event-title">{event.summary}</h2>
        <div className="basic-info">
          <span>{event.startdate}</span>
          <span>{event.location}</span>
        </div>
        <p className="event-details"></p>

        {this.state.eventDetails && (
          <div className="event-details">
            <h2>About event:</h2>
            <a href={event.htmlLink}>See Details on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className="toggle-details-btn"
          onClick={() => this.toggleDetails()}
        >
          {!this.state.eventDetails ? "show details" : "hide-details"}
        </button>
      </div>
    );
  }
}

export default Event;
