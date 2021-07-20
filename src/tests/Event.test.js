import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render event module", () => {
    shallow(<Event />);
  });

  test("render heading for event", () => {
    expect(EventWrapper.find(".event-title")).toHaveLength(1);
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
});
