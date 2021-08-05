import { loadFeature, defineFeature } from "jest-cucumber";
import {  shallow } from "enzyme";

import Event from '../event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An element is collapsed by default', ({ given, when, then }) => {
        let EventWrapper;
        given('the user is shown a list with event elements that are collapsed (by default)', () => {
            EventWrapper = shallow(<Event />)
            expect(EventWrapper.find('.event-details')).toHaveLength(0)
        });

        when('the user wants to get additional additional information about an event', () => {
        });

        then('the event will expand by clicking on the event, showing additional information', () => {
            EventWrapper.find('.toggle-details-btn').simulate('click');
            expect(EventWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user wanted to get the details about an event', () => {
            EventWrapper = shallow(<Event />)
            expect(EventWrapper.find('.event-details')).toHaveLength(0)
        });

        when('the user can click on the event', () => {
            EventWrapper.find('.toggle-details-btn').simulate('click');
        });

        then('the event will expand and the user is able to get additional information on the event', () => {
            expect(EventWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user wanted to collapse events to see only limited information on the events', () => {
            EventWrapper = shallow(<Event />)
            EventWrapper.find('.toggle-details-btn').simulate('click');
            expect(EventWrapper.find('.event-details')).toHaveLength(1)
        });

        when('the user clicks on an expanded event', () => {
            EventWrapper.find('.toggle-details-btn').simulate('click');
        });

        then('the event will collapse showing less information about the event', () => {
            expect(EventWrapper.find('.event-details')).toHaveLength(0)
        });
    });
})