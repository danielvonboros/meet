import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".event-number")).toHaveLength(1);
  });

  // test("check if input and state value are the same", async () => {
  //   const instance = await NumberOfEventsWrapper.instance();
  //   console.log(
  //     NumberOfEventsWrapper.find("value").props(),
  //     "input and value check"
  //   );
  // const stateNumber = NumberOfEventsWrapper.state("number");
  // expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(
  //   stateNumber
  // );
  // });

  // test("change state when input changes", () => {
  //   const eventObject = { target: { value: 2 } };
  //   NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
  //   expect(NumberOfEventsWrapper.state("number")).toBe(2);
  // });

  // test("display default number of 32 events if not specified", () => {
  //   const eventObject = { target: { value: 15 } };
  //   NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
  //   expect(NumberOfEventsWrapper.state("number")).toBe(15);
  // });
});
