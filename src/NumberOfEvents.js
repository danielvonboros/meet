/* eslint-disable no-useless-constructor */
import React from "react";
import {ErrorAlert} from './Alert';

class NumberOfEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      errorText:'',
    })
  }

  handleInputChange(event) {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState=({
        errorText : 'Please enter a value between 1 and 32',
      })
    } else {
    this.props.handleEventNumberChange(value);
  }}

  render() {
    return (
      <div className="event-number">
        <ErrorAlert text={this.state.errorText} />
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
