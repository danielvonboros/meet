import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CitySearch from "../CitySearch";
import EventList from "../EventList";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});
