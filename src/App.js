import React from "react";

import EventList from "./EventList";
import NavBar from "./NavBar";
import { ErrorAlert, InfoAlert } from "./Alert";

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
      errorText: "",
      infoText: "",
      isBoxVisible: false,
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

  componentDidUpdate() {}

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
      let boxElement = document.getElementById("infoBox");
      this.setState({
        errorText: "Please enter a value between 1 and 32",
        numberOfEvents: "",
      });
      boxElement.classList.add("box");
    } else {
      let boxElement = document.getElementById("infoBox");
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
      boxElement.classList.remove("box");
    }
  }

  // onLocationChange(location) {
  //   const suggestions = document.getElementsByClassName('suggestions');
  //    (suggestions.length < 2) ?
  //     this.setState({
  //       infoText : 'We can not find the city you are looking for. Please try another city'
  //     }) :
  //     this.setState({
  //       infoText : ''
  //     });
  //   };
  // };

  handleCityFound() {
    let boxElement = document.getElementById("infoBox");
    boxElement.classList.add("box");
    this.setState({ infoText: "", isBoxVisible: false });
    console.log("city was found");
    boxElement.classList.remove("box");
  }

  handleNoCityFound() {
    let boxElement = document.getElementById("infoBox");
    this.setState(
      {
        infoText:
          "The city you are searching for could not be found. Please modify your input.",
        isBoxVisible: true,
      },
      boxElement.classList.add("box")
    );
    console.log("no city was found");
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    // console.log(infoText)

    return (
      <div className='App'>
        <NavBar
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
          handleEventNumberChange={(value) => this.onEventNumberChange(value)}
          handleLocationChange={(event) => this.onLocationChange(event)}
          locations={this.state.locations}
          errorText={this.state.errorText}
          onCityFound={this.handleCityFound.bind(this)}
          onNoCityFound={this.handleNoCityFound.bind(this)}
        />
        <br />
        <br />
        <br />
        <div id='infoBox'>
          {this.state.infoText}
          {this.state.errorText}
          <InfoAlert />
          <ErrorAlert text={this.props.errorText} />
        </div>
        <EventList
          className='EventList'
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;
