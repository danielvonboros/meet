Feature: Show an events details

Scenario: An element is collapsed by default
Given the user is shown a list with event elements that are collapsed (by default) 
When the user wants to get additional additional information about an event
Then the event will expand by clicking on the event, showing additional information

Scenario: User can expand an event to see its details
Given the user wanted to get the details about an event
When the user can click on the event
Then the event will expand and the user is able to get additional information on the event

Scenario: User can collapse an event to hide its details
Given the user wanted to collapse events to see only limited information on the events 
When the user clicks on an expanded event
Then the event will collapse showing less information about the event