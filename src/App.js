import React from "react";

import EventList from "./EventList";
import NavBar from "./NavBar";
import WelcomeScreen from "./WelcomeScreen";

import { ErrorAlert, InfoAlert, WarningAlert } from "./Alert";

import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";

import "./App.css";
import NProgress from "nprogress";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      showWelcomeScreen: undefined,
      numberOfEvents: 32,
      errorText: "",
      infoText: "",
      warningText: "",
      isBoxVisible: false,
    };
  }

  async componentDidMount() {
    this.mounted = true;
    NProgress.configure({ parent: "#root" });
    NProgress.start();
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.props.numberOfEvents),
            locations: extractLocations(events),
          });

          if (!navigator.onLine) {
            this.setState({
              warningText: "Client is offline. Data could be outdated",
            });
          } else {
            this.setState({
              warningText: "",
            });
          }

          NProgress.done();
        }
      });
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({
  //         events: events.slice(0, this.props.numberOfEvents),
  //         locations: extractLocations(events),
  //       });

  //       if (!navigator.onLine) {
  //           this.setState({
  //             warningText:"Client is offline. Data could be outdated"
  //           })
  //         } else {
  //           this.setState({
  //             warningText:""
  //           })
  //         }

  //       NProgress.done();

  //     }
  //   });
  // }

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
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
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
        <div id="infoBox">
          {this.state.infoText}
          {this.state.errorText}
          {this.state.warningText}
          <InfoAlert />
          <ErrorAlert text={this.props.errorText} />
          <WarningAlert />
        </div>
        <EventList
          data={this.getData()}
          className="EventList"
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
