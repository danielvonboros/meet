import React from "react";

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
    return (
        
      <div className="event">
        <h2 className="event-title">
          {this.props.event && this.props.event.summary}
        </h2>
        <div className="basic-info">
        <p className='event-start-date'>
          {this.props.event && this.props.event.start.dateTime}, {this.props.event && this.props.event.start.timeZone}
        </p>
        <p className='event-end-date'>
          {this.props.event && this.props.event.end.dateTime}, {this.props.event && this.props.event.end.timeZone}
        </p>
          <span>{this.props.event && this.props.event.location}</span>
        </div>
        

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
