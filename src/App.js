import React from "react";

import EventList from "./EventList";
import NavBar from './NavBar';


import { extractLocations, getEvents } from "./api";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
    };
  }

  

  componentDidMount() {
    this.mounted = true;
    // NProgress.configure({ parent: "#root" });

    // NProgress.start();

    getEvents().then((events) => {
      //console.log
      if (this.mounted) {
        //console.log
        this.setState({
          events: events.slice(0, this.props.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentDidUpdate() {
 
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
      });
    });
  };

  onEventNumberChange(value) {
    if (value <= 0 || value > 32) {
      this.setState=({
        errorText : 'Please enter a value between 1 and 32',
        numberOfEvents:'',
      }) } else { 
    this.setState({
      numberOfEvents: value,
    });
  }}

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <NavBar 
        updateEvents={this.updateEvents} 
        numberOfEvents={this.state.numberOfEvents} 
        handleEventNumberChange={(value) => this.onEventNumberChange(value)} 
        locations={this.state.locations} 
        />
        <br />
        <br />
        <br />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        
      </div>
    );
  }
}

export default App;
