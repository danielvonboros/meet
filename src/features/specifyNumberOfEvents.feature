Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, a default number will be shown.
Given the user hasn’t specified a number of events he wants the application to show 
When the user searches for an event
Then the default number of events will be shown

Scenario: User can change the number of events they want to see.
Given a user wanted to specify a different number of events to be shown
When the user specifies a different number of events to be shown in the settings
Then there will only be custom number of events displayed in the application
