import React, { Component } from "react";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: false,
      // event: this.props,
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
    // const event = this.props.event;
    // const location = this.props.event.location;
    // const htmlLink = this.props.event.htmlLink;
    // const description = this.props.event.description;
    // const start = this.props.event.start;

    // const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
    return (
      <div>
        <h2 className="event-title">
          {this.props.event && this.props.event.summary}
        </h2>
        <div className="basic-info">
          {/* <span>{`${eventStart}`}</span> */}
          <span>{this.props.event && this.props.event.location}</span>
        </div>
        <p className="event-details"></p>

        {this.state.eventDetails && (
          <div className="event-details">
            <h2>About event:</h2>
            <a
              className="event-link"
              href={this.props.event && this.props.event.htmlLink}
            >
              See Details on Google Calendar
            </a>
            <p className="event-description">
              {this.props.event && this.props.event.description}
            </p>
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
