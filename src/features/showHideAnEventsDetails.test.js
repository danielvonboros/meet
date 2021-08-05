import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('#', () => {
        given('#', () => {

        });
        when('#', () => {

        });
        then('#', () => {

        });
    })
})