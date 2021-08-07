import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import CitySearch from "../CitySearch";
import EventList from "../EventList";
import NavBar from "../NavBar";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(NavBar).find(CitySearch)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  test('App passes "events" state as a prop to Eventlist', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });
  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationState = AppWrapper.state("locations");
    expect(AppLocationState).not.toEqual(undefined);
    expect(AppWrapper.find(NavBar).find(CitySearch).props().locations).toEqual(
      AppLocationState
    );
  });
  test("get list of events in city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(NavBar).find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({
      suggestions: locations,
    });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get a list of all events when user selects "all cities', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(NavBar).find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('passes "numberOfEvents" state as a prop to NumberOfEvents component', () => {
    const AppWrapper = mount(<App />);
    const AppNumberOfEventsState = AppWrapper.state("numberOfEvents");
    expect(AppNumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NavBar).find(NumberOfEvents).props().numberOfEvents).toEqual(
      AppNumberOfEventsState
    );
    AppWrapper.unmount();
  });

  // Warning that component changes a controlled input to be uncontrolled
  test("should render a number of 32 events by default", () => {
    const AppWrapper = mount(<App />);
    const numberOfEvents = AppWrapper.find(NavBar).find(NumberOfEvents).find(".number");
    expect(numberOfEvents.props().value).toEqual(32);
    AppWrapper.unmount();
  });

  // Warning that component changes a controlled input to be uncontrolled
  test("change the number of displayed events when the user changes the input", async () => {
    const AppWrapper = mount(<App />);
    const numberOfEvents = AppWrapper.find(NavBar).find(NumberOfEvents).find(".number");
    const eventObject = { target: { value: 1 } };
    await numberOfEvents.simulate("change", eventObject);
    expect(AppWrapper.state("numberOfEvents")).toEqual(1);
    AppWrapper.unmount();
  });
});
