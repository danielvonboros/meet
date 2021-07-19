import React from "react";

import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";

class App extends React.Component {
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
        <CitySearch />
      </div>
    );
  }
}

export default App;
