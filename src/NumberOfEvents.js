import React from "react";

class NumberOfEvents extends React.Component {
  state = {
    number: 32,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      number: value,
    });
  };

  render() {
    return (
      <div className="event-number">
        <input
          className="number"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
