/* eslint-disable no-useless-constructor */
import React from "react";
import {ErrorAlert} from './Alert';

class NumberOfEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      errorText:'',
      numberOfEvents:'',
    })
  }

  render() {
    return (
      <div className="event-number">
        <ErrorAlert text={this.props.errorText} />
        <input
          className="number"
          placeholder="Number of Events"
          value={this.props.numberOfEvents}
          onChange={this.props.handleEventNumberChange.bind(this)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
