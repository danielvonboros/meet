import React from "react";

import EventList from "./EventList";
import NavBar from './NavBar';


import { extractLocations, getEvents } from "./api";

import "./App.css";
import NProgress from "nprogress";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      errorText:'',
    };
  }

  

  componentDidMount() {
    this.mounted = true;
    NProgress.configure({ parent: "#root" });

    NProgress.start();

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.props.numberOfEvents),
          locations: extractLocations(events),
        });
        NProgress.done();
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

  onEventNumberChange(event) {
    const value = event.target.value;
    if (value < 0 || value > 32) {
      this.setState({
        errorText : 'Please enter a value between 1 and 32',
        numberOfEvents: '',
      }) 
    } else { 
      this.setState({
      numberOfEvents: value,
      errorText : '',
    });
  }
}

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
        errorText={this.state.errorText}
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
