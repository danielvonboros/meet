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

componentDidUpdate() {
  console.log(this.props.numberOfEvents, 'Number of Events after Update')
}

  handleInputChange(event) {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      return this.setState=({
        errorText : 'Please enter a value between 1 and 32',
        numberOfEvents:'value',
      });
      } else {
        this.setState=({
          errorText : '',
          numberOfEvents:'value',
        });
    this.props.handleEventNumberChange(value);
  }
 }

  render() {
    return (
      <div className="event-number">
        <ErrorAlert text={this.props.errorText} />
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
