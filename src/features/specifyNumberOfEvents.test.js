import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";

import App from '../app';
import NumberOfEvents from '../NumberOfEvents';
import NavBar from "../NavBar";

import {mockData} from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, a default number will be shown.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user hasn’t specified a number of events he wants the application to show', () => {
            AppWrapper = mount(<App />);
        });

        when('the user searches for an event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
            
        });

        then('the default number of events will be shown', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
            // Because mock-data has only 2 events
            AppWrapper.unmount();
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('a user wanted to specify a different number of events to be shown', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specifies a different number of events to be shown in the settings', async () => {
            const numberOfEvents = AppWrapper.find(NavBar).find(NumberOfEvents).find(".number");
            const eventObject = { target: { value: 1 } };
            await numberOfEvents.simulate("change", eventObject);
            // Because mock-data only has 2 events - so 2 options - 1 or 2
        });

        then('there will only be custom number of events displayed in the application', () => {
            expect(AppWrapper.state("numberOfEvents")).toEqual(1);
            AppWrapper.unmount();
        });
    });
})