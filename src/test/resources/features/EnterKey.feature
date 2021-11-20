
Feature: the user can use "Enter" key from their keyboard

  Agile Story: Verify that user can use "Enter" key from their keyboard on the login page

  #AC8
  Scenario: Enter Key without credentials
    Given the user is on the login page
    When the user click on Username input box
    And hit Enter button
    Then the cursor appears on Password input box

  Scenario: Enter Key with credentials
    Given the user is on the login page
    When the user click on Username input box
    And the user types username in Username input box
    And hit Enter button
    Then the cursor appears on Password input box
    When the user types password in Password Input box
    And hit Enter button
    Then Login Button should be clicked