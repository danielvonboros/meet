import React, { Component } from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";

describe("<CitySearch /> component", () => {
  test("render text input", () => {
    const CitySearchWrapper = shallow("<CitySearch />");
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });
});
