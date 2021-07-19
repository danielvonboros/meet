import React from "react";
import EventList from "./EventList";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <div className="App">
        <EventList events={this.state.events} />
      </div>
    );
  }
}
