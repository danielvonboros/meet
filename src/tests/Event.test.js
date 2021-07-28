import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("shallow event instance should render with prop", () => {
    expect(EventWrapper.instance().props.event).toEqual(event);
  });

  test("render heading for event", () => {
    expect(EventWrapper.find(".event-title").text()).toBe(event.summary);
  });

  test("render collapsed content for event", () => {
    expect(EventWrapper.find(".basic-info")).toHaveLength(1);
  });

  test("render basic event information", () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
  });

  test("have a toggle details button", () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find(".toggle-details-btn")).toHaveLength(1);
  });

  test("event details expand on click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.setState({ eventDetails: false });
    EventWrapper.find(".toggle-details-btn").simulate("click");
    expect(EventWrapper.state("eventDetails")).toBe(true);
  });

  test("event details collapse on click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.setState({ eventDetails: true });
    EventWrapper.find(".toggle-details-btn").simulate("click");
    expect(EventWrapper.state("eventDetails")).toBe(false);
  });

  // Scenario 2: User can expand an event to see its details.
  test("shallow event should render details button", () => {
    expect(EventWrapper.find(".toggle-details-btn")).toHaveLength(1);
  });

  test("shallow event should be collapsed by default", () => {
    expect(EventWrapper.state("eventDetails")).toBeFalsy();
  });

  test("shallow event should show expanded details after click details button", () => {
    EventWrapper.find(".toggle-details-btn").simulate("click");
    expect(EventWrapper.state("eventDetails")).toBeTruthy();
  });

  test("shallow event should render link after click details button", () => {
    expect(EventWrapper.find("a").prop("href")).toBeTruthy();
  });

  test("shallow event should render description data after click details button", () => {
    expect(EventWrapper.find(".event-description").text()).toBe(
      event.description
    );
  });

  test("shallow event should render status data after click details button", () => {
    expect(EventWrapper.find(".event-description").text()).toBe(
      event.description
    );
  });
});
