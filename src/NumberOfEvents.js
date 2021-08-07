/* eslint-disable no-useless-constructor */
import React from "react";

class NumberOfEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.props.handleEventNumberChange(value);
  }

  render() {
    return (
      <div className="event-number">
        <input
          className="number"
          placeholder="Number of Events"
          value={this.props.numberOfEvents}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
