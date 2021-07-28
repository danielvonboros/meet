import React from "react";

import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";

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
    // console.log(
    //   this.state,
    //   "state from cDM App",
    //   this.props,
    //   "props from cDM App"
    // );
    this.mounted = true; //this.state.mounted?
    // eslint-disable-next-line no-undef
    // NProgress.configure({ parent: "#root" });

    // eslint-disable-next-line no-undef
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
    // console.log(
    //   this.state,
    //   "state from cDU App",
    //   this.props,
    //   "props from cDU App"
    // );
    // this.mounted = true;
    // if (this.state.numberOfEvents > 1 && this.state.numberOfEvents !== 32) {
    //   this.setState({
    //     events: this.state.events.slice(0, this.state.numberOfEvents),
    //   });
    // }
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
    this.setState({
      numberOfEvents: value,
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          handleEventNumberChange={(value) => {
            this.onEventNumberChange(value);
          }}
          />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        
      </div>
    );
  }
}

export default App;
