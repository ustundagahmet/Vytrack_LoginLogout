Feature: The password in bullet signs by default

  Agile Story: User should see the password in bullet signs by default

  @smoke
  #AC5
  Scenario: the password in bullet signs by default
    Given the user is on the login page
    When the user types "password" in Password Input
    Then the user should able to see the password as bullet signs