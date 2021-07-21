import React from "react";

import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
    };
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
