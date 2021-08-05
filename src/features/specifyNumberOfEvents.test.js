import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('the user hasn’t specified a number of events he wants the application to show', () => {

        });

        when('the user searches for an event', () => {

        });

        then('the default of 32 events will be shown', () => {

        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('a user wanted to specify a different number of events to be shown', () => {

        });

        when('the user specifies a different number of events to be shown in the settings (e.g. 10)', () => {

        });

        then('there will only be 10 events displayed in the application', () => {

        });
    });
})