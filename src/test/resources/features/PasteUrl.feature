Feature: The system shouldn't allow users to login to application without providing valid credentials

  @smoke
  #AC2
  Scenario:copy the url after log in, then log out, paste the same url to browser and try to skip authentication step
    Given the user is on the login page
    When Login Base Page successfully
    And the user logs out Base Page
    And the user pastes the copied Url to browser
    Then the user must stay on login pages



